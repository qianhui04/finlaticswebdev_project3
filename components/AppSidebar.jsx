
import Link from "next/link";
import { useRouter } from "next/router";

export default function AppSidebar() {
  const router = useRouter();

  const isUploadActive = router.pathname === "/";
  const isDocumentsActive =
    router.pathname === "/documents" ||
    router.pathname.startsWith("/chat/");

  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="brand">
        <div className="brand-logo">
          <svg viewBox="0 0 40 40" fill="none">
            <path
              d="M20 4L23.5 16.5L36 20L23.5 23.5L20 36L16.5 23.5L4 20L16.5 16.5L20 4Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="brand-text">
          <h2>DocuMind<span> AI</span></h2>
          <p>DOCUMENT INTELLIGENCE</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="navigation">
        <p className="nav-heading">WORKSPACE</p>

        <Link
          href="/"
          className={`nav-link ${isUploadActive ? "active" : ""}`}
        >
          <span className="nav-icon">＋</span>
          <span>Upload Document</span>
        </Link>

        <Link
          href="/documents"
          className={`nav-link ${isDocumentsActive ? "active" : ""}`}
        >
          <span className="nav-icon">▤</span>
          <span>My Documents</span>
        </Link>
      </div>

      {/* Bottom section */}
      <div className="sidebar-bottom">
        <div className="powered-card">
          <div className="powered-icon">✦</div>
          <div>
            <strong>AI-powered search</strong>
            <p>Find answers in your files.</p>
          </div>
        </div>

        <div className="profile">
          <div className="avatar">QH</div>
          <div className="profile-info">
            <strong>My Workspace</strong>
            <span>Personal account</span>
          </div>
          <span className="profile-menu">···</span>
        </div>
      </div>

      
      <style jsx>{`
        .sidebar {
          width: 258px;
          min-width: 258px;
          min-height: 100vh;
          background: #17182c;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          padding: 28px 18px;
          box-sizing: border-box;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 55px;
          padding: 0 8px;
        }

        .brand-logo {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-logo svg {
          width: 23px;
          height: 23px;
        }

        .brand-text h2 {
          margin: 0;
          font-size: 19px;
          font-weight: 700;
          color: white;
        }

        .brand-text h2 span {
          color: #a78bfa;
        }

        .brand-text p {
          margin: 4px 0 0;
          font-size: 9px;
          letter-spacing: 1.4px;
          color: #9293aa;
        }

        .navigation {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nav-heading {
          color: #777991;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin: 0 0 12px 12px;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 13px;
          width: 100%;
          padding: 13px 14px;
          box-sizing: border-box;
          border-radius: 10px;
          color: #b7b8ca;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s ease;
          background: transparent;
        }

        .nav-link:hover {
          background: #282941;
          color: #ffffff;
          text-decoration: none;
        }

        .nav-link.active {
          background: #343052;
          color: #c4b5fd;
          font-weight: 600;
          box-shadow: inset 3px 0 0 #a78bfa;
        }

        .nav-icon {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
        }

        .sidebar-bottom {
          margin-top: auto;
        }

        .powered-card {
          display: flex;
          gap: 12px;
          padding: 15px 12px;
          border-radius: 12px;
          background: #24253e;
          margin-bottom: 22px;
        }

        .powered-icon {
          color: #a78bfa;
          font-size: 20px;
        }

        .powered-card strong {
          font-size: 12px;
          color: #ffffff;
        }

        .powered-card p {
          margin: 5px 0 0;
          font-size: 11px;
          color: #9293aa;
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 15px 5px 0;
          border-top: 1px solid #34354b;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #51417d;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: 700;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .profile-info strong {
          color: white;
          font-size: 12px;
        }

        .profile-info span {
          color: #9293aa;
          font-size: 11px;
        }

        .profile-menu {
          margin-left: auto;
          color: #9293aa;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 210px;
            min-width: 210px;
          }
        }
      `}</style>
    </aside>
  );
}
