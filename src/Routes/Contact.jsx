import React from 'react';
import { useContext, useState } from "react";
import ThemeContext from "../context";
import Form from '../Components/Form';

const Contact = () => {

  const { theme } = useContext(ThemeContext);

  const [usuario, setUsuario] = useState({});

  const addUsuario = (nombre, email, estadoValidacion, resultado) => {
    setUsuario({nombre, email, estadoValidacion, resultado})
  }

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form onAddUsuario={addUsuario}/>    
      <div>{usuario.resultado}</div>
    </div>
  )
}

export default Contact;

/*○ Una vez enviado el formulario, deberán mostrar un mensaje de éxito que
contenga el siguiente formato: “Gracias [nombre del usuario], te
contactaremos cuando antes vía mail”.*/