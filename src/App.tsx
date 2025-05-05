import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App1 from './paginas/pagina1/App1'
import App2 from './paginas/pagina2/App2'
import App3 from './paginas/pagina3/App3'
import App4 from './paginas/pagina4/App4'
import App5 from './paginas/pagina5/App5'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App1 />} />
        <Route path='/pagina2' element={<App2 />} />
        <Route path='/pagina3' element={<App3 />} />
        <Route path='/pagina4' element={<App4 />} />
        <Route path='/pagina5' element={<App5 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
