import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App1 from '../pagina1/App1';
import App2 from '../pagina2/App2';

test('se o usuário clicar no botão entrar, redirecionar para a página 2', async () => {
    render(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App1 />} />
          <Route path='/pagina2' element={<App2 />} />
        </Routes>
      </BrowserRouter>
      );

      const Entrar = screen.getByTestId('bt_entrar');
      userEvent.click(Entrar);

    expect(window.location.pathname).toEqual('/pagina2');
})