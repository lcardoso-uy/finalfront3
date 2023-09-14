import React from 'react';
import { useContext, useState } from "react";
import ThemeContext from "../context";
import Form from '../Components/Form';

const Contact = () => {

  const { theme } = useContext(ThemeContext);

  const [usuario, setUsuario] = useState({});

  const addUsuario = (nombre, email, estadoValidacion, resultado) => {
    setUsuario({ nombre, email, estadoValidacion, resultado })
  }

  const getValidationClass = (estadoValidacion) => {
    switch (estadoValidacion) {
      case 'S':
        return 'showsuccess';
      case 'N':
        return 'showerror';
      default:
        return '';  // Caso default sin ninguna clase.
    }
  };
  return (
    <div style={{ background: theme.background, color: theme.font }} >
      <h1>Contact me</h1>
      <h2 className='center'>Want to know more?</h2>
      <p className='center'>Send us your questions and we will contact you</p>
      <Form onAddUsuario={addUsuario} />
      <div className={`center ${getValidationClass(usuario.estadoValidacion)}`}>
        {usuario.resultado}
      </div>
    </div>
  )
}

export default Contact;