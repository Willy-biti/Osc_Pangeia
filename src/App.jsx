import Home from './Pages/Home';
import {GlobalStyle} from './Theme/globalStyles';
import {BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route index element={<Home />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
