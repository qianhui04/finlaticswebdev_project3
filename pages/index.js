
import React, { useState } from "react";
import PdfUploader from "../components/PdfUploader";
import AppSidebar from "../components/AppSidebar";

const HomePage = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (file) => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed.");
      }

      const processResponse = await fetch("/api/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: data.extractedText,
          filename: data.filename,
          totalPages: data.totalPages,
        }),
      });

      const processData = await processResponse.json();

      if (!processResponse.ok) {
        throw new Error(
          processData.error || "Text processing failed."
        );
      }

      setResult({
        ...data,
        ...processData,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="app">
        <AppSidebar />

        <main className="main">
          <header className="topbar">
            <div className="breadcrumb">
              Workspace <span>/</span> Documents
            </div>
            <div className="status">
              <span className="status-dot"></span>
              AI Workspace
            </div>
          </header>

          <section className="content">
            <div className="welcome">
              <div>
                <p className="eyebrow">YOUR AI DOCUMENT WORKSPACE</p>
                <h1>Understand your documents.</h1>
                <p className="subtitle">
                  Upload a PDF and let AI help you find the information
                  that matters.
                </p>
              </div>
              <div className="welcome-icon">✧</div>
            </div>

            <div className="section-heading">
              <div>
                <h2>Upload a document</h2>
                <p>Start by adding a PDF to your workspace.</p>
              </div>
              <span className="step-label">STEP 01 / 03</span>
            </div>

            <div className="upload-card">
              <div className="upload-icon">↑</div>

              <h3>Drop your PDF here</h3>
              <p>
                Choose a file from your computer to start processing.
              </p>

              <PdfUploader onUpload={handleUpload} />

              <div className="upload-info">
                <span>▧ PDF files only</span>
                <span>·</span>
                <span>Maximum 10 MB</span>
              </div>
            </div>

            {loading && (
              <div className="message-card">
                <div className="spinner"></div>
                <div>
                  <strong>Processing your document...</strong>
                  <p>Please wait while we extract the PDF text.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="error-card">
                <strong>Upload failed</strong>
                <p>{error}</p>
              </div>
            )}

            {result && (
              <div>
                <h3>Processing Results</h3>

                <p>Total pages: {result.totalPages}</p>
                <p>Total chunks: {result.totalChunks}</p>

                <h3>Generated Chunks</h3>

                {result.chunks?.map((chunk, index) => (
                  <div key={index}>
                    <h4>Chunk {index + 1}</h4>

                    <p>
                      Tokens: {chunk.startToken} - {chunk.endToken}
                    </p>

                    <p>{chunk.content}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="info-grid">
              <div className="info-card">
                <span className="info-icon purple">01</span>
                <h3>Upload</h3>
                <p>Add your PDF document securely.</p>
              </div>

              <div className="info-card">
                <span className="info-icon blue">02</span>
                <h3>Process</h3>
                <p>Extract and prepare document content.</p>
              </div>

              <div className="info-card">
                <span className="info-icon green">03</span>
                <h3>Ask AI</h3>
                <p>Ask questions and get answers from your PDF.</p>
              </div>
            </div>

            <footer>
              DocuMind · AI-powered document assistant
            </footer>
          </section>
        </main>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .app {
          min-height: 100vh;
          display: flex;
          background: #f7f8fc;
          color: #20243a;
          font-family: Inter, Arial, sans-serif;
        }

        .sidebar {
          width: 245px;
          background: #17182d;
          color: white;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 21px;
          font-weight: 750;
          margin-bottom: 55px;
        }

        .brand-icon {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #7664e8;
          font-size: 22px;
        }

        .nav-label {
          color: #777991;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin: 0 0 15px 10px;
        }

        .nav-item {
          padding: 13px 12px;
          border-radius: 9px;
          color: #a7a8bd;
          font-size: 14px;
          margin-bottom: 7px;
        }

        .nav-item span {
          margin-right: 12px;
        }

        .nav-item.active {
          background: #302d50;
          color: white;
        }

        .sidebar-bottom {
          margin-top: auto;
        }

        .profile {
          border-top: 1px solid #33344a;
          padding-top: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #7664e8;
          display: grid;
          place-items: center;
          font-size: 12px;
          font-weight: 700;
        }

        .profile strong,
        .profile small {
          display: block;
        }

        .profile strong {
          font-size: 12px;
        }

        .profile small {
          color: #9293a9;
          font-size: 11px;
          margin-top: 5px;
        }

        .main {
          flex: 1;
          min-width: 0;
        }

        .topbar {
          height: 76px;
          padding: 0 6%;
          border-bottom: 1px solid #e9eaf1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
        }

        .breadcrumb {
          color: #777b91;
          font-size: 13px;
        }

        .breadcrumb span {
          margin: 0 10px;
          color: #c0c1ce;
        }

        .status {
          font-size: 12px;
          color: #62677b;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #36bd83;
          border-radius: 50%;
        }

        .content {
          max-width: 1050px;
          margin: auto;
          padding: 55px 6% 25px;
        }

        .welcome {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
        }

        .eyebrow {
          color: #7664e8;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.7px;
        }

        h1 {
          font-size: clamp(27px, 4vw, 36px);
          letter-spacing: -1.2px;
          margin: 12px 0;
          color: #20223a;
        }

        .subtitle {
          color: #85899b;
          font-size: 14px;
          line-height: 1.7;
        }

        .welcome-icon {
          width: 75px;
          height: 75px;
          border-radius: 23px;
          background: #eeebff;
          color: #7664e8;
          display: grid;
          place-items: center;
          font-size: 42px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 17px;
        }

        h2 {
          font-size: 17px;
          margin: 0 0 7px;
        }

        .section-heading p,
        .result-heading p {
          font-size: 12px;
          color: #9295a5;
          margin: 0;
        }

        .step-label {
          color: #9992d8;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1px;
        }

        .upload-card {
          background: white;
          border: 1px dashed #c8c3ed;
          border-radius: 15px;
          padding: 40px 20px;
          text-align: center;
          box-shadow: 0 5px 25px rgba(40, 35, 90, 0.035);
        }

        .upload-icon {
          margin: auto auto 16px;
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: #f0edff;
          color: #7664e8;
          display: grid;
          place-items: center;
          font-size: 30px;
        }

        .upload-card h3 {
          font-size: 16px;
          margin: 0 0 8px;
        }

        .upload-card > p {
          font-size: 12px;
          color: #9699a9;
          margin-bottom: 22px;
        }

        .upload-info {
          display: flex;
          justify-content: center;
          gap: 10px;
          color: #a1a3b0;
          font-size: 11px;
          margin-top: 19px;
        }

        .upload-card :global(input[type="file"]) {
          display: block;
          max-width: 100%;
          margin: auto;
          font-size: 12px;
          color: #777b91;
        }

        .upload-card :global(input[type="file"]::file-selector-button) {
          background: #7664e8;
          color: white;
          border: none;
          border-radius: 7px;
          padding: 11px 19px;
          margin-right: 12px;
          cursor: pointer;
          font-weight: 600;
        }

        .result-card,
        .message-card,
        .error-card {
          margin-top: 22px;
          background: white;
          padding: 24px;
          border: 1px solid #e9eaf1;
          border-radius: 13px;
        }

        .result-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #eeeef3;
        }

        .success-label {
          color: #26a879;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1px;
        }

        .result-heading h2 {
          margin-top: 12px;
        }

        .pdf-badge {
          background: #fff0f0;
          color: #e35e69;
          padding: 9px 12px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 700;
        }

        .text-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }

        .text-heading span {
          color: #999;
          font-size: 11px;
        }

        .result-card pre {
          white-space: pre-wrap;
          overflow-wrap: anywhere;
          max-height: 400px;
          overflow-y: auto;
          background: #f7f8fc;
          color: #4d5267;
          padding: 18px;
          border-radius: 9px;
          font-size: 12px;
          line-height: 1.8;
        }

        .message-card {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .message-card p,
        .error-card p {
          color: #9295a5;
          font-size: 12px;
        }

        .spinner {
          width: 25px;
          height: 25px;
          border: 3px solid #e8e5fa;
          border-top-color: #7664e8;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .error-card {
          border-color: #f5caca;
          color: #c64c55;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 35px;
        }

        .info-card {
          background: white;
          border: 1px solid #eeeef3;
          padding: 19px;
          border-radius: 12px;
        }

        .info-icon {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          display: grid;
          place-items: center;
          font-size: 10px;
          font-weight: 750;
        }

        .purple { background: #f0edff; color: #7664e8; }
        .blue { background: #e9f3ff; color: #438bd5; }
        .green { background: #e7f8f0; color: #31a778; }

        .info-card h3 {
          font-size: 13px;
          margin: 15px 0 6px;
        }

        .info-card p {
          font-size: 11px;
          line-height: 1.6;
          color: #9295a5;
          margin: 0;
        }

        footer {
          text-align: center;
          color: #a6a8b4;
          font-size: 10px;
          margin-top: 45px;
        }

        @media (max-width: 700px) {
          .sidebar {
            width: 65px;
            padding: 20px 10px;
          }

          .brand {
            justify-content: center;
            margin-bottom: 40px;
          }

          .brand > span,
          .nav-label,
          .nav-item:not(.active),
          .nav-item {
            font-size: 0;
          }

          .nav-item {
            text-align: center;
            padding: 13px 5px;
          }

          .nav-item span {
            font-size: 18px;
            margin: 0;
          }

          .profile {
            justify-content: center;
          }

          .profile > div:last-child {
            display: none;
          }

          .content {
            padding: 35px 18px;
          }

          .welcome-icon {
            display: none;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .topbar {
            padding: 0 18px;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
