import React from 'react';
import { useContext } from "react";
import ThemeContext from '../context';

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

    <div className='header'>
      <h1>Dental PRO</h1>
      <nav >
        <ul>
          <li>
            <Link to="/Home" style={{ background: theme.background, color: theme.font }}>Home</Link>
          </li>
          <li>
            <Link to="/contacto" style={{ background: theme.background, color: theme.font }}>Contact</Link>
          </li>
          <li>
            <Link to="/favoritos" style={{ background: theme.background, color: theme.font }}>Favs</Link>
          </li>
        </ul>
        <button onClick={handleChangeTheme}
          style={{ background: theme.background, color: theme.font }}>Change theme</button>
      </nav>
    </div>
  )
}

export default Navbar;