import QuemSomos from './Components/QuemSomos';
import Home from './Pages/Home';
import {GlobalStyle} from './Theme/globalStyles';
import {BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

import AboutUs from './Pages/AboutUs';
import Historia from './Pages/Historia';
import Fotos from './Pages/Fotos';
import Videos from './Pages/Videos';
import Eifa from './Pages/Eifa';
import Fraiburgo from './Pages/Fraiburgo';
import Haiti from './Pages/Haiti';
import Palestina from './Pages/Palestina';
import Contatos from './Pages/Contatos';
import Doacao from './Pages/Doacao';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}/>
          <Route index element={<Home />} />
          <Route path='/sobre-pangeia' element={<AboutUs />} />
          <Route path='/historia' element={<Historia />} />
          <Route path='/fotos' element={<Fotos />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/viagem-escola-eifa' element={<Eifa />} />
          <Route path='/viagem-fraiburgo' element={<Fraiburgo />} />
          <Route path='/festa-haiti' element={<Haiti />} />
          <Route path='/evento-palestina' element={<Palestina />} />
          <Route path='/contatos' element={<Contatos />} />
          <Route path='/doacao' element={<Doacao />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
