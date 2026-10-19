import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth";

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="box">
      <h1>Olá, {user.nome}!</h1>
      <p>Esporte favorito: <strong>{user.esporte}</strong></p>
      <nav className="menu">
        <Link to="/usuarios">Clientes</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
      <button className="sair" onClick={() => { logout(); navigate("/login"); }}>Sair</button>
    </div>
  );
}