import React from "react";
import { useState } from "react";


const Form = ({ onAddUsuario }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const validarNombre = (nombre) => {
    return (nombre[0] !== ' ' && nombre.length > 5);
  }

  const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const esValido = validarNombre(nombre) && validarEmail(email);
    const estadoValidacion = esValido ? "S" : "N";

    const resultado = estadoValidacion === "S" ? `Gracias ${nombre}, te contactaremos cuanto antes vía mail` : "Por favor verifique su información nuevamente";

    onAddUsuario(nombre, email, estadoValidacion, resultado);

    setNombre("");
    setEmail("");
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre " value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Ingrese el email " value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Form;


/*Nombre completo (con longitud mayor a 5).
■ Email (con formato correcto de email).
○ En caso de haber un error, mostrar el siguiente mensaje de error: “Por favor
verifique su información nuevamente”.*/
