import { Link } from "react-router-dom";
import { useCart } from "../../cart";
import NavLoja from "../../Components/NavLoja";

const preco = (v) => "R$ " + v.toFixed(2).replace(".", ",");

export default function Carrinho() {
  const { itens, remover, total } = useCart();

  return (
    <>
      <NavLoja />
      <main className="container">
        <h1>Carrinho</h1>

        {itens.length === 0 ? (
          <div className="vazio">
            <p>Seu carrinho está vazio.</p>
            <Link to="/produtos" className="btn" style={{ marginTop: 16 }}>Ver produtos</Link>
          </div>
        ) : (
          <>
            {itens.map((i) => (
              <div className="item" key={`${i.id}-${i.tamanho}`}>
                <img src={i.imagem} alt={i.nome} />
                <div className="item-info">
                  <strong>{i.nome}</strong>
                  <p className="tag">Tamanho {i.tamanho} · Qtd {i.qtd}</p>
                  <p className="preco">{preco(i.preco * i.qtd)}</p>
                </div>
                <button className="btn sec" onClick={() => remover(i.id, i.tamanho)}>Remover</button>
              </div>
            ))}

            <div className="total">
              <h2>Total: {preco(total)}</h2>
              <button className="btn">Finalizar compra</button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
