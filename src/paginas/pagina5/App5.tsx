import { useNavigate } from "react-router-dom";
import "./App5.css";
import { useEffect, useState } from "react";

type Informacoes = {
  name: string
  agency: string
  account: string
  current_balance: number
}

type Historico = {
  type: string;
  value: number;
  current_balance: number;
  timestamp: number;
};

function App5() {
  const navegacao = useNavigate();
  const voltapradois = () => {
    navegacao(-1);
  };

  const [historico, setHistorico] = useState<Historico[]>([]);
  async function getData() {
    const response = await fetch(
      `https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/history`
    );

    const dados = (await response.json()).all_transactions as Historico[];

    setHistorico(dados);
  }

  useEffect(() => {
    getData();
  }, []);

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
          <span className="logo_dev">
            <img src="src/imagens/logo_dev.jpg" alt="" />
          </span>
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
        <div>Histórico de transações</div>
      </section>
      <div className="arrumar_bt">
      <div className="historicos">
        {historico.map((item) => (
          <div className="historico_1">
            <div className={item.type === "withdraw" ? "tipo2": "tipo1"}>{item.type === "withdraw" ? "Saque": "Deposito"}</div>

            <div className="transacao">
              <div className="VALOR">
                <span>Valor:</span>
                <span>R$: {item.value}</span>
              </div>
              <div className="DATA">
                <span>Data:</span>
                <span>{new Date(item.timestamp).toLocaleDateString()}</span>
              </div>
              <div className="SALDO">
                <span>Saldo:</span>
                <span>R$: {item.current_balance}</span>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="espaco_vazio"></div>

      <div className="botao">
        <div className="bt_voltar">
          <button
            className="bt_voltar"
            data-testid="bt_voltar"
            onClick={voltapradois}
          >
            Voltar
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App5;
