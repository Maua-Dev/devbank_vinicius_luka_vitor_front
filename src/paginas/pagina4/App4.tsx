import { useNavigate } from 'react-router-dom';
import './App4.css';
import { useEffect, useState } from 'react';

type Informacoes = {
  name: string
  agency: string
  account: string
  current_balance: number
}

function App4() {

  const navegacao= useNavigate();
  const voltapradois = () => {
    navegacao(-1);
  };

  const [informar, setInformar] = useState<Informacoes>();
  async function getInfo() {
    const informar = await fetch(
      `https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/`
    );

    const informacao = (await informar.json()) as Informacoes;

    setInformar(informacao);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="pagina">

      <header className="cabecalho">
        <section className="logo">
          <span className='logo_dev'><img src="src/imagens/logo_dev.jpg" alt="" /></span>
        </section>
        <div className="cabecalho-direita">
          <div className="info-conta">
            <span>Nome: {informar?.name}</span>
            <br />
            <span>Agência: {informar?.agency}</span>
            <br />
            <span>Conta: {informar?.account}</span>
          </div>
          <div className="foto-perfil">?</div>
        </div>
      </header>

      <section className="valores">
        <div>Saldo atual: {informar?.current_balance}</div>
        <div>Quantidade depositada: 000 R$</div>
      </section>

      <main className="principal">
        <p className="instrucoes">
          Selecione as cédulas e a quantidade que você deseja.
        </p>

        <div className="cedulas-grid">
  {[2, 5, 10, 20, 50, 100, 200].map((valor) => (
    <div key={valor}>
      <div className="cedula">
        <div className="valor">{valor} R$</div>
      </div>
      <div className="quantidade">
  <label>Quantidade</label>
  <input type="number" min={0} defaultValue={0} />
      </div>
    </div>
  ))}
</div>

        <div className="botoes">
          <button
          className="btn-voltar"
          data-testid='btn-voltar'
          onClick={voltapradois}>Voltar</button>
          <button className="btn-sacar">Sacar</button>
        </div>
      </main>
    </div>
  );
}

export default App4;