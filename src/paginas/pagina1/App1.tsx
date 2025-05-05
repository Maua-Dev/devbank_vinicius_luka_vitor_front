import { useNavigate } from "react-router-dom";
import "./App1.css";

type Informacoes = {
  name: string
  agency: string
  account: string
  current_balance: string
}

function App1() {

  const navigate = useNavigate();

  const vaipradois = () => {
    navigate('/pagina2');
  }

  return (
    <div className="container">
      <div className="content">
        <img src="src/imagens/logo_dev.jpg" alt="DevBank Logo" className="logo" />
      <div className="espacamento1"></div>
        <input
          type="text"
          placeholder="Coloque aqui o endpoint da sua API"
          className="input"
        />
      <div className="espacamento2"></div>
        <button
          className="button"
          data-testid="bt_entrar"
          onClick={vaipradois}>
          Entrar
        </button>
      </div>
    </div>
  );
}

export default App1;