import { Link, NavLink } from "react-router-dom";

export default function NavLoja({ abaAtiva, setAbaAtiva }) {
  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? " ativo" : ""}`;

  return (
    <nav className="nav-loja">
      <Link to="/" className="nav-logo">
        sport<span>MAX</span>
      </Link>

      <div className="nav-links">
        <NavLink
          to="/produtos"
          className={linkClass}
          onClick={() => setAbaAtiva("lista")}
        >
          Produtos
        </NavLink>

        <NavLink
          to="/cadastro-produto"
          className={linkClass}
        >
          Cadastrar Produto
        </NavLink>

        <NavLink to="/sobre" className={linkClass}>
          Sobre
        </NavLink>

        <NavLink to="/faq" className={linkClass}>
          FAQ
        </NavLink>

        <NavLink to="/carrinho" className={linkClass}>
          Carrinho
        </NavLink>
      </div>
    </nav>
  );
}
