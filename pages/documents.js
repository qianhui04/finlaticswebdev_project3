
import { useEffect, useState } from "react";
import Link from "next/link";
import AppSidebar from "../components/AppSidebar";

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await fetch("/api/documents");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to load documents.");
        }

        setDocuments(data.documents || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDocuments();
  }, []);

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-MY", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="app">
      <AppSidebar />

      <main className="main">
        <header className="topbar">
          <span>Workspace / Document Library</span>
        </header>

        <section className="content">
          <div className="page-heading">
            <div>
              <p className="eyebrow">YOUR WORKSPACE</p>
              <h1>Document Library</h1>
              <p className="subtitle">
                Manage your uploaded PDFs and explore their contents with AI.
              </p>
            </div>

            <Link href="/" className="upload-button">
              <span>＋</span> Upload PDF
            </Link>
          </div>

          <div className="stats-card">
            <div className="stats-icon">▤</div>
            <div>
              <p>Total Documents</p>
              <h2>{documents.length}</h2>
            </div>
          </div>

          <div className="documents-section">
            <div className="section-heading">
              <div>
                <h2>Your Documents</h2>
                <p>All your uploaded PDF files in one place.</p>
              </div>
            </div>

            {loading && (
              <div className="state-message">
                Loading your documents...
              </div>
            )}

            {!loading && error && (
              <div className="state-message error">
                {error}
              </div>
            )}

            {!loading && !error && documents.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">▤</div>
                <h3>No documents yet</h3>
                <p>
                  Upload your first PDF to start asking questions
                  about your documents.
                </p>
                <Link href="/" className="upload-button">
                  ＋ Upload your first PDF
                </Link>
              </div>
            )}

            {!loading && !error && documents.length > 0 && (
              <div className="document-list">
                {documents.map((doc) => (
                  <div className="document-card" key={doc.id}>
                    <div className="pdf-icon">PDF</div>

                    <div className="document-info">
                      <h3>{doc.filename}</h3>
                      <p>
                        {doc.total_pages} pages
                        <span>•</span>
                        Uploaded {formatDate(doc.created_at)}
                      </p>
                    </div>

                    <Link
                      href={`/chat/${doc.id}`}
                      className="chat-button"
                    >
                      Chat with document <span>→</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        .app {
          display: flex;
          min-height: 100vh;
          background: #f7f8fc;
        }

        .main {
          flex: 1;
          min-width: 0;
        }

        .topbar {
          height: 72px;
          background: white;
          border-bottom: 1px solid #ececf2;
          display: flex;
          align-items: center;
          padding: 0 40px;
          color: #9293a3;
          font-size: 13px;
        }

        .content {
          max-width: 1150px;
          margin: 0 auto;
          padding: 45px 40px;
        }

        .page-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
        }

        .eyebrow {
          color: #8063d8;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
        }

        h1 {
          color: #202139;
          font-size: 30px;
          margin: 0;
        }

        .subtitle {
          color: #85869a;
          font-size: 14px;
          margin-top: 10px;
        }

        .upload-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 9px;
          background: #7054d8;
          color: white;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          transition: background 0.2s;
        }

        .upload-button:hover {
          background: #5c40c4;
        }

        .stats-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: white;
          border: 1px solid #ededf3;
          border-radius: 12px;
          padding: 22px;
          width: 240px;
          margin-bottom: 38px;
        }

        .stats-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #f0edff;
          color: #7659d6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 23px;
        }

        .stats-card p {
          color: #9293a3;
          font-size: 12px;
          margin: 0 0 5px;
        }

        .stats-card h2 {
          color: #25263d;
          font-size: 24px;
          margin: 0;
        }

        .documents-section {
          background: white;
          border: 1px solid #ededf3;
          border-radius: 14px;
          padding: 26px;
        }

        .section-heading h2 {
          color: #25263d;
          font-size: 17px;
          margin: 0;
        }

        .section-heading p {
          color: #9293a3;
          font-size: 12px;
          margin: 7px 0 22px;
        }

        .document-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .document-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 17px;
          border: 1px solid #ededf3;
          border-radius: 11px;
          transition: border-color 0.2s, background 0.2s;
        }

        .document-card:hover {
          border-color: #c9bdf5;
          background: #fcfbff;
        }

        .pdf-icon {
          width: 45px;
          height: 48px;
          background: #fff0f0;
          color: #e45c64;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
        }

        .document-info {
          flex: 1;
          min-width: 0;
        }

        .document-info h3 {
          color: #292a41;
          font-size: 13px;
          margin: 0 0 7px;
          overflow-wrap: anywhere;
        }

        .document-info p {
          color: #9697a7;
          font-size: 11px;
          margin: 0;
        }

        .document-info p span {
          margin: 0 8px;
        }

        .chat-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 14px;
          border: 1px solid #ddd5fa;
          border-radius: 8px;
          color: #7054d8;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .chat-button:hover {
          background: #f3f0ff;
        }

        .state-message {
          text-align: center;
          padding: 50px 20px;
          color: #85869a;
          font-size: 13px;
        }

        .error {
          color: #dc5555;
        }

        .empty-state {
          text-align: center;
          padding: 55px 20px;
        }

        .empty-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 18px;
          border-radius: 18px;
          background: #f0edff;
          color: #7659d6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .empty-state h3 {
          color: #292a41;
          font-size: 16px;
          margin: 0 0 9px;
        }

        .empty-state p {
          color: #9293a3;
          font-size: 13px;
          margin: 0 auto 22px;
          max-width: 360px;
          line-height: 1.6;
        }

        @media (max-width: 700px) {
          .content {
            padding: 28px 18px;
          }

          .topbar {
            padding: 0 18px;
          }

          .page-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .document-card {
            flex-wrap: wrap;
          }

          .chat-button {
            margin-left: 61px;
          }
        }
      `}</style>
    </div>
  );
}
