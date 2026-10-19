import NavLoja from "../../Components/NavLoja";
import "./faq.css";

const perguntas = [
  {
    pergunta: "Como sei qual tamanho escolher?",
    resposta:
      "Pegue uma peça sua que serve bem e compare com a que você quer. Se ficar entre dois tamanhos, vá no maior. Se continuar na dúvida, mande um e-mail que a gente ajuda.",
  },
  {
    pergunta: "Posso trocar ou devolver?",
    resposta:
      "Pode, em até 7 dias depois de receber o pedido. A peça precisa estar sem uso e com a etiqueta.",
  },
  {
    pergunta: "Quanto tempo demora a entrega?",
    resposta:
      "Em geral de 3 a 10 dias úteis, dependendo da região. Você recebe o código de rastreio por e-mail quando o pedido sai.",
  },
  {
    pergunta: "Quais formas de pagamento vocês aceitam?",
    resposta: "Cartão de crédito, Pix e boleto.",
  },
  {
    pergunta: "Como falo com vocês?",
    resposta:
      "Por e-mail, em seu-email-real@dominio.com. Respondemos de segunda a sexta, normalmente no mesmo dia.",
  },
];

export default function Faq() {
  return (
    <>
      <NavLoja />
      <main className="faq">
        <h1>Perguntas frequentes</h1>
        {perguntas.map((item) => (
          <details key={item.pergunta}>
            <summary>{item.pergunta}</summary>
            <p>{item.resposta}</p>
          </details>
        ))}
      </main>
    </>
  );
}
