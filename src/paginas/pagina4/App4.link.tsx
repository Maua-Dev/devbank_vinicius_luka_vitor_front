import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App2 from '../pagina2/App2';
import App4 from '../pagina4/App4';

test('se o usuário clicar no botão entrar, redirecionar para a página 2', async () => {
    render(
    <BrowserRouter>
        <Routes>
          <Route path='/pagina2' element={<App2 />} />
          <Route path='/pagina4' element={<App4 />} />
        </Routes>
      </BrowserRouter>
      );

      const Voltar = screen.getByTestId('btn-voltar');
      userEvent.click(Voltar);

    expect(window.location.pathname).toEqual(-1);
})