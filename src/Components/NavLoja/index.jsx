import { Link } from "react-router-dom";
import { useCart } from "../../cart";

export default function NavLoja() {
  const { itens } = useCart();
  const qtd = itens.reduce((soma, i) => soma + i.qtd, 0);

  return (
    <header className="nav">
      <div className="nav-in">
        <Link to="/" className="logo">SPORT<span>MAX</span></Link>
        <nav className="nav-links">
          <Link to="/produtos">Produtos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/carrinho">Carrinho{qtd > 0 && <span className="badge">{qtd}</span>}</Link>
        </nav>
      </div>
    </header>
  );
}
