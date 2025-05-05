import { useNavigate } from 'react-router-dom';
import './App2.css'
import { useEffect, useState } from 'react';


type Informacoes = {
  name: string
  agency: string
  account: string
  current_balance: number
}

function App2() {

  const navegar = useNavigate();

  const vaipratres = () => {
    navegar('/pagina3');
  };

  const vaipraquatro = () => {
    navegar('/pagina4');
  };

  const vaipracinco = () => {
    navegar('/pagina5');
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

  return(
    <div className="pagina">

      <header className="cabecalho">
        <section className="logo">
          <span className="logo_dev"><img src="src/imagens/logo_dev.jpg" alt="" /></span>
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

      <section className="info">
        <div className='div1'>O que você deseja fazer?</div>
        <div className='div2'></div>
        <div className='div3'> 
          <span>Saldo Atual: {informar?.current_balance}</span>
        
        </div>
      </section>

      <section className='all_cards'>

        <button
          className="button1"
          data-testid="bt_depositar"
          onClick={vaipratres}>
          <div className='card_D'>
            <h2>Depositar</h2>
            <div className='imagem1'>
              <img src="src/imagens/dinheiro_dev.jpg" alt="Dinheiro" />
            </div>
            <div className='seta_cima'>
              <img src="src/imagens/seta_cima.jpg" alt="" />
            </div>
          </div>
        </button>

        <button
        className="button2"
        data-testid="bt_sacar"
        onClick={vaipraquatro}>
          <div className='card_R'>
            <h2>Retirar</h2>
            <div className='imagem2'>
             <img src="src/imagens/dinheiro_dev.jpg" alt="Dinheiro" />
            </div>
            <div className='seta_baixo'>
              <img src="src/imagens/seta_baixo.jpg" alt="" />
            </div>
          </div>
        </button>

        <button
          className="button3"
          data-testid="bt_transacoes"
          onClick={vaipracinco}>
          <div className='card_T'>
            <h2>Transações</h2>
            <div className='seta_direita'>
              <img src="src/imagens/seta_direita.jpg" alt="" />
            </div>
            <div className='imagem3'>
            </div>
            <div className='seta_esquerda'>
              <img src="src/imagens/seta_esquerda.jpg" alt="" />
            </div>
          </div>
        </button>
      </section>

      <div className='espaco'></div>

      <div className='alterar_api'>
          <input
          className='input_bonito'
          type="text"
          placeholder='Digite uma nova API'
          />
      </div>
    </div>
  )
}

export default App2;
