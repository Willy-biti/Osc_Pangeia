import QuemSomos from './Components/QuemSomos';
import Home from './Pages/Home';
import {GlobalStyle} from './Theme/globalStyles';
import {BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

import AboutUs from './Pages/AboutUs';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route index element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
