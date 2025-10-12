
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container text-center">
        <h5 className="footer-title mb-3">
          <span className="gradient-text">Kamlesh</span> Portfolio
        </h5>

        <div className="footer-icons mb-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="footer-text mb-0">
          © {new Date().getFullYear()} Kamlesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
