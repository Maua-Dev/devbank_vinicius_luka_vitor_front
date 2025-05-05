import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App2 from '../pagina2/App2';
import App3 from '../pagina3/App3';
import App4 from '../pagina4/App4';
import App5 from '../pagina5/App5';

test('se o usuário clicar no botão entrar, redirecionar para a página 2', async () => {
    render(
    <BrowserRouter>
        <Routes>
         <Route path='/pagina2' element={<App2 />} />
         <Route path='/pagina3' element={<App3 />} />
         <Route path='/pagina4' element={<App4 />} />
         <Route path='/pagina5' element={<App5 />} />
        </Routes>
      </BrowserRouter>
      );

    const Depositar = screen.getByTestId('bt_depositar');
    userEvent.click(Depositar);
    expect(window.location.pathname).toEqual('/pagina3');

    const Sacar= screen.getByTestId('bt_sacar');
    userEvent.click(Sacar);
    expect(window.location.pathname).toEqual('/pagina4');

    const Transacoes= screen.getByTestId('bt_transacoes');
    userEvent.click(Transacoes);
    expect(window.location.pathname).toEqual('/pagina5');
})