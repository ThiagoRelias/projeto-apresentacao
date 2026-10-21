import { useEffect, useState } from "react";
import { API_PRODUTOS } from "../../auth";
import NavLoja from "../../Components/NavLoja";

const vazio = { nome: "", preco: "", categoria: "", esporte: "", tamanhos: "", imagem: "" };

export default function CadastroProduto() {
  const [form, setForm] = useState(vazio);
  const [lista, setLista] = useState([]);
  const [msg, setMsg] = useState("");

  const carregar = () => fetch(API_PRODUTOS).then((r) => r.json()).then(setLista);
  useEffect(() => { carregar(); }, []);

  const muda = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function salvar(e) {
    e.preventDefault();
    if (!form.imagem) return setMsg("Insira o link da imagem");

    const produto = {
      nome: form.nome,
      preco: Number(form.preco),
      categoria: form.categoria,
      esporte: form.esporte,
      tamanhos: form.tamanhos.split(",").map((t) => t.trim()).filter(Boolean),
      imagem: form.imagem,
    };

    await fetch(API_PRODUTOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto),
    });

    setForm(vazio);
    setMsg("Produto cadastrado!");
    carregar();
  }

  async function excluir(id) {
    if (!confirm("Excluir este produto?")) return;
    await fetch(`${API_PRODUTOS}/${id}`, { method: "DELETE" });
    carregar();
  }

  return (
    <>
      <NavLoja />
      
      <main className="box largo">
        <h2>Cadastrar roupa</h2>

        <form onSubmit={salvar}>
          <div className="form-group">
            <label>Nome do Produto</label>
            <input name="nome" placeholder="Ex: Camiseta Dry Fit" value={form.nome} onChange={muda} required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preço</label>
              <input name="preco" type="number" step="0.01" min="0" placeholder="R\$ 0,00" value={form.preco} onChange={muda} required />
            </div>
            
            <div className="form-group">
              <label>Tamanhos</label>
              <input name="tamanhos" placeholder="P, M, G" value={form.tamanhos} onChange={muda} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Categoria</label>
              <input name="categoria" placeholder="Ex: Camisetas" value={form.categoria} onChange={muda} required />
            </div>

            <div className="form-group">
              <label>Esporte</label>
              <input name="esporte" placeholder="Ex: Corrida" value={form.esporte} onChange={muda} required />
            </div>
          </div>

          <div className="form-group">
            <label>Link da Imagem</label>
            <input name="imagem" type="url" placeholder="https://exemplo.com" value={form.imagem} onChange={muda} required />
          </div>

          {form.imagem && (
            <div className="form-group">
              <img src={form.imagem} alt="prévia" onError={(e) => e.target.style.display = 'none'} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8, border: "1px solid var(--border-color)" }} />
            </div>
          )}

          {msg && <p className="erro" style={{ color: msg.includes("cadastrado") ? "#22c55e" : "#ef4444" }}>{msg}</p>}
          
          <button type="submit">Cadastrar</button>
        </form>

        <h3>Produtos cadastrados</h3>
        
        <table>
          <tbody>
            {lista.map((p) => (
              <tr key={p.id}>
                <td>
                  <img src={p.imagem} alt={p.nome} />
                </td>
                <td>
                  <strong>{p.nome}</strong>
                  <span style={{ fontSize: "12px", color: "#a1a1aa" }}>{p.esporte} · {p.categoria} · {p.tamanhos.join(", ")}</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--accent)" }}>R\$ {p.preco.toFixed(2).replace(".", ",")}</span>
                </td>
                <td>
                  <button onClick={() => excluir(p.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
