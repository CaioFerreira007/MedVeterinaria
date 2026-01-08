import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { BUSINESS_INFO } from "../constants/businessinfo";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Links de navegação
  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  // Detecta scroll para adicionar sombra
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll para links internos
  const handleNavClick = (e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav
        className="navbar"
        role="navigation"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a href="/" className="logo" aria-label="Dra. Karla - Página Inicial">
          <strong>{BUSINESS_INFO.shortName}</strong>
          <span>Veterinária Domiciliar</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                role="menuitem"
                className="nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <MobileMenu links={navLinks} />
      </nav>
    </header>
  );
};

export default NavBar;
