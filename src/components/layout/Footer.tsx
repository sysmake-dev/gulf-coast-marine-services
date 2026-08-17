import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer__waves" aria-hidden="true">
        <svg
          className="footer__wave footer__wave--back"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70
              C120,30 240,30 360,70
              C480,110 600,110 720,70
              C840,30 960,30 1080,70
              C1200,110 1320,110 1440,70
              L1440,120
              L0,120
              Z"
          />
        </svg>

        <svg
          className="footer__wave footer__wave--front"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60
              C120,20 240,20 360,60
              C480,100 600,100 720,60
              C840,20 960,20 1080,60
              C1200,100 1320,100 1440,60
              L1440,120
              L0,120
              Z"
          />
        </svg>
      </div>

      <ul>
        <li>
          <Link to={{ pathname: "/", hash: "#services" }}>Services</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to={{ pathname: "/", hash: "#service-area" }}>
            Service Area
          </Link>
        </li>

        <li>
          <Link to={{ pathname: "/", hash: "#contact" }}>Contact</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="#">
          <i className="fa fa-facebook-official"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram"></i>
        </a>
      </div>

      <p>
        Copyright &copy; 2026 Gulf Coast Marine Services. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
