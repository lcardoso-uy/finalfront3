import React from 'react';
import { useContext } from "react";
import ThemeContext from '../context';

import Home from '../Routes/Home';
import Contact from '../Routes/Contact';
import Favs from '../Routes/Favs';
import Detail from '../Routes/Detail';
import NoPage from '../NoPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";

const Navbar = () => {

  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <Router>
      <div className='header'>
        <h1>Dental PRO</h1>
        <nav >
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/contacto">Contact</Link>
            </li>
            <li>
              <Link to="/favoritos">Favs</Link>
            </li>
          </ul>

          <button onClick={handleChangeTheme}
            style={{ background: theme.background, color: theme.font }}>Change theme</button>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<h2>Página de Inicio</h2>} />
        <Route path='/Home' element={<Home />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='contacto' element={<Contact />} />
        <Route path='favoritos' element={<Favs />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  )
}

export default Navbar;