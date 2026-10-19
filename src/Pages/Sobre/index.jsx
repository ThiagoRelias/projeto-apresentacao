import NavLoja from "../../Components/NavLoja";
import "./sobre.css";

export default function Sobre() {
  return (
    <>
      <NavLoja />
      <main className="sobre">
        <h1>Sobre a Sport Max</h1>

        <p>
          A Sport Max vende roupas esportivas para corrida, academia e futebol.
          Começou com poucas peças e hoje tem um catálogo pequeno, de propósito.
        </p>
        <p>
          Antes de entrar na loja, cada peça passa por lavagem e uso de verdade.
          Se desbota, encolhe ou esquenta demais, não vai para o site.
        </p>

        <h2>Em resumo</h2>
        <dl className="fatos">
          <div>
            <dt>Modalidades</dt>
            <dd>Corrida, academia e futebol</dd>
          </div>
          <div>
            <dt>Tamanhos</dt>
            <dd>P ao GG nas roupas, 38 ao 42 nos calçados</dd>
          </div>
          <div>
            <dt>Atendimento</dt>
            <dd>Segunda a sexta, das 9h às 18h</dd>
          </div>
          <div>
            <dt>Contato</dt>
            <dd>seu-email-real@dominio.com</dd>
          </div>
        </dl>
      </main>
    </>
  );
}
