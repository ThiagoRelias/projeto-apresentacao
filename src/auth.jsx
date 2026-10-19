import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();
export const API = "http://localhost:3000/usuarios";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user") || "null"));

  async function login(email, senha) {
    const res = await fetch(`${API}?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`);
    const dados = await res.json();
    if (dados.length === 0) return false;
    localStorage.setItem("user", JSON.stringify(dados[0]));
    setUser(dados[0]);
    return true;
  }
  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export function Privada({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}