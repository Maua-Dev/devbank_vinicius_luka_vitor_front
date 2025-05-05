import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App2 from '../pagina2/App2';
import App5 from '../pagina5/App5';

test('se o usuário clicar no botão entrar, redirecionar para a página 2', async () => {
    render(
    <BrowserRouter>
        <Routes>
          <Route path='/pagina2' element={<App2 />} />
          <Route path='/pagina5' element={<App5 />} />
        </Routes>
      </BrowserRouter>
      );

      const Voltar = screen.getByTestId('btn-voltar');
      userEvent.click(Voltar);

    expect(window.location.pathname).toEqual(-1);
})