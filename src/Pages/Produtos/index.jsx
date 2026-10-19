import { useState } from "react";
import { Link } from "react-router-dom";
import { produtos } from "../../data/produtos";
import NavLoja from "../../Components/NavLoja";

const preco = (v) => "R$ " + v.toFixed(2).replace(".", ",");

export default function Produtos() {
  const [categoria, setCategoria] = useState("Todas");
  const [esporte, setEsporte] = useState("Todos");

  const categorias = ["Todas", ...new Set(produtos.map((p) => p.categoria))];
  const esportes = ["Todos", ...new Set(produtos.map((p) => p.esporte))];

  const lista = produtos.filter(
    (p) =>
      (categoria === "Todas" || p.categoria === categoria) &&
      (esporte === "Todos" || p.esporte === esporte)
  );

  return (
    <>
      <NavLoja />
      <main className="container">
        <h1>Produtos</h1>

        <div className="filtros">
          <span className="filtro-titulo">Esporte</span>
          <div className="chips">
            {esportes.map((e) => (
              <button key={e} className={"chip" + (e === esporte ? " ativo" : "")} onClick={() => setEsporte(e)}>{e}</button>
            ))}
          </div>
          <span className="filtro-titulo">Categoria</span>
          <div className="chips">
            {categorias.map((c) => (
              <button key={c} className={"chip" + (c === categoria ? " ativo" : "")} onClick={() => setCategoria(c)}>{c}</button>
            ))}
          </div>
        </div>

        <div className="grid">
          {lista.map((p) => (
            <Link key={p.id} to={`/produtos/${p.id}`} className="card">
              <img src={p.imagem} alt={p.nome} />
              <div className="card-body">
                <span className="tag">{p.esporte}</span>
                <h3>{p.nome}</h3>
                <p className="preco">{preco(p.preco)}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
