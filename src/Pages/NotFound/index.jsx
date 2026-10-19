import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="box">
      <h1>404 </h1>
      <p>Página não encontrada.</p>
      <Link to="/home">Voltar para o início</Link>
    </div>
  );
}