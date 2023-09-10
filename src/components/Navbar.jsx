import React from 'react';
import { useContext } from "react";
import ThemeContext from '../context';

import Home from '../Routes/Home';
import Contact from '../Routes/Contact';
import Favs from '../Routes/Favs';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <Router>
      <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
          </ul>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={handleChangeTheme}
          style={{ background: theme.background, color: theme.font }}>Change theme</button>
      </nav>
      <Routes>
            <Route path='/' element={<h2>Página de Inicio</h2>} />
            <Route path='Home' element={<Home/>}/>
            <Route path='contacto' element={<Contact/>}/>
            <Route path='favoritos' element={<Favs/>}/>
        </Routes>
    </Router>
  )
}

export default Navbar
