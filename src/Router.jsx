import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";
import Faq from "./Pages/Faq";
import Sobre from "./Pages/Sobre";
import Produtos from "./Pages/Produtos";
import Produto from "./Pages/Produto";
import Carrinho from "./Pages/Carrinho";
import NotFound from "./Pages/NotFound";
import "./auth.css";

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:id" element={<Produto />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
