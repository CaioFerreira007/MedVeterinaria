import "../styles/NavBar.css";
// import logo from "../assets/logo.jpeg";
import FotoKarla from "../assets/fotoKarla.jpg";

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        {/* <img src={logo} alt="Logo do Blog da Karla" className="logo" /> */}
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
      <article className="foto-karla">
        <img src={FotoKarla} alt="" />
      </article>
    </header>
  );
}

export default NavBar;
