import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionar(produto, tamanho) {
    setItens((prev) => {
      const existente = prev.find((i) => i.id === produto.id && i.tamanho === tamanho);
      if (existente) {
        return prev.map((i) => (i === existente ? { ...i, qtd: i.qtd + 1 } : i));
      }
      return [...prev, { ...produto, tamanho, qtd: 1 }];
    });
  }

  function remover(id, tamanho) {
    setItens((prev) => prev.filter((i) => !(i.id === id && i.tamanho === tamanho)));
  }

  const total = itens.reduce((soma, i) => soma + i.preco * i.qtd, 0);

  return (
    <CartContext.Provider value={{ itens, adicionar, remover, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);