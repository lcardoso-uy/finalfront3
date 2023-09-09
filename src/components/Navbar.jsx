import React from 'react';
import { useContext } from "react";
import ThemeContext from '../context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const{theme, handleChangeTheme} = useContext(ThemeContext);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme}
        style={{background: theme.background, color: theme.font}}>Change theme</button>
    </nav>
  )
}

export default Navbar
