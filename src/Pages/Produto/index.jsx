import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { produtos } from "../../data/produtos";
import { useCart } from "../../cart";
import NavLoja from "../../Components/NavLoja";

export default function Produto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { adicionar } = useCart();
  const produto = produtos.find((p) => p.id === Number(id));
  const [tamanho, setTamanho] = useState("");

  if (!produto) {
    return (
      <>
        <NavLoja />
        <main className="container"><p className="vazio">Produto não encontrado.</p></main>
      </>
    );
  }

  return (
    <>
      <NavLoja />
      <main className="container">
        <Link to="/produtos">← Voltar</Link>
        <div className="detalhe" style={{ marginTop: 16 }}>
          <img src={produto.imagem} alt={produto.nome} />
          <div>
            <span className="tag">{produto.esporte} · {produto.categoria}</span>
            <h1>{produto.nome}</h1>
            <p className="preco" style={{ fontSize: "1.5rem" }}>
              R$ {produto.preco.toFixed(2).replace(".", ",")}
            </p>

            <h2 style={{ marginTop: 20 }}>Tamanho</h2>
            <div className="tamanhos">
              {produto.tamanhos.map((t) => (
                <button key={t} className={"chip" + (t === tamanho ? " ativo" : "")} onClick={() => setTamanho(t)}>{t}</button>
              ))}
            </div>

            <button
              className="btn"
              disabled={!tamanho}
              onClick={() => { adicionar(produto, tamanho); navigate("/carrinho"); }}
            >
              {tamanho ? "Adicionar ao carrinho" : "Escolha um tamanho"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
