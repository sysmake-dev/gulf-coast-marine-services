import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesPanel from "./ServicesPanel";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function toggleMenu(): void {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  function closeMenu(): void {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container nav__container">
      <div className="logo">
        <Link to={{ pathname: "/", hash: "#hero" }}>
          Gulf Coast Marine Services
        </Link>
      </div>

      <div className="nav__actions">
        <button
          className={isMenuOpen ? "nav__toggle active" : "nav__toggle"}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <nav className={isMenuOpen ? "nav active" : "nav"} aria-label="Primary">
        <ul>
          <li>
            <ServicesPanel onCloseMenu={closeMenu} />
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li>
            <Link
              to={{ pathname: "/", hash: "#service-area" }}
              onClick={closeMenu}
            >
              Service Area
            </Link>
          </li>

          <li>
            <Link to={{ pathname: "/", hash: "#contact" }} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
