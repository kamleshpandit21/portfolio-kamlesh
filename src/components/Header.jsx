import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-gradient" to="/">
          Kamlesh<span className="dot">.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link cool-link" to="/">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link cool-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link cool-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link cool-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link cool-link" to="/mywork">
                My works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cool-link" to="/learning-tracker">
                Learning Tracker
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cool-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cool-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
