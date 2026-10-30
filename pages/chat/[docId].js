import React, { useState } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const ChatDocPage = () => {
  const router = useRouter();
  const { docId } = router.query;

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question.trim() || loading || !docId) return;

    const currentQuestion = question.trim();

    // Add the user's question and an empty assistant message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: currentQuestion,
      },
      {
        role: "assistant",
        content: "",
        sources: [],
      },
    ]);

    setQuestion("");
    setLoading(true);
    setError("");

    try {
      // Step 1: Connect to the streaming API
      const response = await fetch("/api/chat-stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: currentQuestion,
          documentId: docId,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to generate answer.");
      }

      if (!response.body) {
        throw new Error("Streaming response is not available.");
      }

      // Step 2: Read the incoming stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let buffer = "";

      // Helper: update the latest assistant message
      const updateAssistant = (callback) => {
        setMessages((prev) => {
          const updated = [...prev];
          const lastIndex = updated.length - 1;

          if (updated[lastIndex]?.role === "assistant") {
            updated[lastIndex] = callback(updated[lastIndex]);
          }

          return updated;
        });
      };

      // Step 3: Process each SSE event
      const processEvent = (eventText) => {
        if (!eventText.trim()) return;

        let eventName = "message";
        const dataLines = [];

        eventText.split("\n").forEach((line) => {
          if (line.startsWith("event:")) {
            eventName = line.slice(6).trim();
          }

          if (line.startsWith("data:")) {
            dataLines.push(line.slice(5).trim());
          }
        });

        const data = dataLines.join("\n");

        if (!data) return;

        if (eventName === "sources") {
          const sources = JSON.parse(data);

          updateAssistant((message) => ({
            ...message,
            sources,
          }));
        }

        if (eventName === "token") {
          const token = JSON.parse(data);

          updateAssistant((message) => ({
            ...message,
            content: message.content + token,
          }));
        }

        if (eventName === "error") {
          const errorData = JSON.parse(data);
          throw new Error(errorData.error || "Streaming failed.");
        }
      };

      // Step 4: Keep reading until Claude finishes
      while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        buffer += decoder.decode(value, {
          stream: true,
        });

        const events = buffer.split("\n\n");

        buffer = events.pop() || "";

        events.forEach(processEvent);
      }

      // Process any remaining data
      buffer += decoder.decode();

      if (buffer.trim()) {
        processEvent(buffer);
      }

    } catch (err) {
      console.error("Chat streaming error:", err);

      setError(err.message);

      // Remove the empty or incomplete assistant message
      setMessages((prev) => prev.slice(0, -1));

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="chat-container">
        <header className="header">
          <h1>DocuMind AI</h1>
          <p>Chat with your uploaded document</p>
          <small>Document ID: {docId || "Loading..."}</small>
        </header>

        <main className="messages">
          {messages.length === 0 && (
            <div className="welcome">
              <h2>Ask your document anything!</h2>
              <p>
                Ask a question about the uploaded PDF and
                Claude will answer using its content.
              </p>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.role}`}
            >
              <strong>
                {message.role === "user" ? "You" : "DocuMind AI"}
              </strong>

              <div className="markdown-content">
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>

              {message.sources?.length > 0 && (
                <div className="sources">
                  <strong>Sources</strong>

                  {message.sources.map((source, sourceIndex) => (
                    <div
                      key={source.chunkId}
                      className="source-card"
                    >
                      <p>
                        <strong>Source {sourceIndex + 1}:</strong>{" "}
                        {source.filename}
                      </p>

                      <p>Chunk ID: {source.chunkId}</p>

                      <p>
                        Tokens: {source.startToken} - {source.endToken}
                      </p>

                      <p>
                        Similarity:{" "}
                        {(source.similarity * 100).toFixed(1)}%
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="loading">
              Claude is responding...
            </div>
          )}

          {error && (
            <div className="error">
              {error}
            </div>
          )}
        </main>

        <form className="input-area" onSubmit={handleSubmit}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about your PDF..."
            disabled={loading || !docId}
          />

          <button
            type="submit"
            disabled={loading || !question.trim() || !docId}
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f4f5fb;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }

        .chat-container {
          max-width: 850px;
          height: 85vh;
          margin: auto;
          background: white;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        .header {
          padding: 24px;
          background: #29234d;
          color: white;
        }

        .header h1 {
          margin: 0 0 8px;
        }

        .header p {
          margin: 0 0 8px;
          color: #ddd8f5;
        }

        .header small {
          color: #c4bde8;
        }

        .messages {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
        }

        .welcome {
          text-align: center;
          margin-top: 100px;
          color: #555;
        }

        .message {
          padding: 16px;
          margin-bottom: 16px;
          border-radius: 12px;
          max-width: 85%;
          line-height: 1.6;
        }

        .message p {
          white-space: pre-wrap;
        }

        .user {
          background: #eeeaff;
          margin-left: auto;
        }

        .assistant {
          background: #f4f5f8;
          margin-right: auto;
        }

        .sources {
          margin-top: 20px;
          padding-top: 12px;
          border-top: 1px solid #ddd;
        }

        .source-card {
          background: white;
          border: 1px solid #e2e2e8;
          border-radius: 8px;
          padding: 10px;
          margin-top: 10px;
          font-size: 13px;
        }

        .source-card p {
          margin: 4px 0;
          overflow-wrap: anywhere;
        }

        .loading {
          color: #777;
          padding: 12px;
        }

        .error {
          color: #c62828;
          padding: 12px;
        }

        .input-area {
          display: flex;
          gap: 10px;
          padding: 20px;
          border-top: 1px solid #eee;
        }

        .input-area input {
          flex: 1;
          min-width: 0;
          padding: 14px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 15px;
        }

        .input-area button {
          padding: 14px 24px;
          border: none;
          border-radius: 8px;
          background: #6854d9;
          color: white;
          cursor: pointer;
          font-weight: bold;
        }

        .input-area button:disabled {
          background: #aaa;
          cursor: not-allowed;
        }

        @media (max-width: 600px) {
          .page {
            padding: 10px;
          }

          .chat-container {
            height: 95vh;
          }

          .message {
            max-width: 95%;
          }
        }

        .markdown-content {
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .markdown-content h1,
        .markdown-content h2,
        .markdown-content h3 {
          margin: 18px 0 10px;
          color: #29234d;
        }

        .markdown-content p {
          margin: 10px 0;
        }

        .markdown-content ul,
        .markdown-content ol {
          padding-left: 24px;
          margin: 10px 0;
        }

        .markdown-content li {
          margin-bottom: 6px;
        }

        .markdown-content strong {
          color: #29234d;
        }

        .markdown-content code {
          background: #eeeaff;
          padding: 2px 5px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ChatDocPage;