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

    const resultado = estadoValidacion === "S" ? `Thank you ${nombre}. We will contact you as soon as possible by email` : 'Please review your information';

    onAddUsuario(nombre, email, estadoValidacion, resultado);

    setNombre("");
    setEmail("");
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name " value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="e-mail " value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;