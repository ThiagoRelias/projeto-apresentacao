import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";
import Faq from "./Pages/Faq";
import Sobre from "./Pages/Sobre";
import Produtos from "./Pages/Produtos";
import Produto from "./Pages/Produto";
import Carrinho from "./Pages/Carrinho";
import Cadastro from "./Pages/Cadastro";
import CadastroProduto from "./Pages/CadastroProduto";
import NotFound from "./Pages/NotFound";
import "./auth.css";

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:id" element={<Produto />} />
            <Route path="/cadastro-produto" element={<CadastroProduto />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/carrinho" element={<Carrinho />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
