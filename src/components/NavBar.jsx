import "../styles/NavBar.css";

function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <strong>Dra. Karla</strong>
          <span>Veterinária</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
