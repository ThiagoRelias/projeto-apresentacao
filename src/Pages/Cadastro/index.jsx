import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../auth";

export default function Cadastro() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "", telefone: "", esporte: "" });
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const muda = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function salvar(e) {
    e.preventDefault();
    if (form.senha.length < 6) return setErro("A senha precisa ter no mínimo 6 caracteres");
    const existe = await (await fetch(`${API}?email=${encodeURIComponent(form.email)}`)).json();
    if (existe.length > 0) return setErro("Esse e-mail já está cadastrado");
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Cadastro realizado!");
    navigate("/login");
  }

  return (
    <div className="box">
      <h1>Criar conta</h1>
      <form onSubmit={salvar}>
        <input name="nome" placeholder="Seu nome" onChange={muda} required />
        <input name="email" type="email" placeholder="E-mail" onChange={muda} required />
        <input name="senha" type="password" placeholder="Senha (mín. 6)" onChange={muda} required />
        <input name="telefone" placeholder="Telefone" onChange={muda} required />
        <input name="esporte" placeholder="Esporte favorito" onChange={muda} required />
        {erro && <p className="erro">{erro}</p>}
        <button>Cadastrar</button>
      </form>
      <p>Já tem conta? <Link to="/login">Entrar</Link></p>
    </div>
  );
}
