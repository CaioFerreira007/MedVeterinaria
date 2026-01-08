import { useState, useEffect } from "react";
import "../styles/MobileMenu.css";

const MobileMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha menu ao clicar em link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Previne scroll do body quando menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Fecha menu ao pressionar ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div className="mobile-menu">
      {/* Botão Hamburger */}
      <button
        className={`hamburger ${isOpen ? "is-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-content"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menu Content */}
      <nav
        id="mobile-menu-content"
        className={`mobile-menu-content ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul className="mobile-menu-list">
          {links.map((link, index) => (
            <li
              key={link.href}
              className="mobile-menu-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="mobile-menu-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
