import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../auth";

export default function Usuarios() {
  const [lista, setLista] = useState([]);
  const [busca, setBusca] = useState("");

  const carregar = () => fetch(API).then((r) => r.json()).then(setLista);
  useEffect(() => { carregar(); }, []);

  async function excluir(id) {
    if (!confirm("Excluir este cliente?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    carregar();
  }

  const filtrada = lista.filter((u) => u.nome.toLowerCase().includes(busca.toLowerCase()));

  return (
    <div className="box largo">
      <h1>Clientes</h1>
      <input placeholder="Buscar por nome..." value={busca} onChange={(e) => setBusca(e.target.value)} />
      <table>
        <thead><tr><th>Nome</th><th>E-mail</th><th>Telefone</th><th>Esporte</th><th></th></tr></thead>
        <tbody>
          {filtrada.map((u) => (
            <tr key={u.id}>
              <td>{u.nome}</td><td>{u.email}</td><td>{u.telefone}</td><td>{u.esporte}</td>
              <td><button className="sair" onClick={() => excluir(u.id)}>Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/home">← Voltar</Link>
    </div>
  );
}