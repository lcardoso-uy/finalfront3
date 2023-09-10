import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import doctor from "/images/doctor.jpg";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
//TODO - Estilos

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  //https://jsonplaceholder.typicode.com/users

  const [dentista, setDentista] = useState({})
  const params = useParams()

  const getDentista = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    setDentista(data)
  }

  useEffect(() => {
    getDentista()
  }, [params])

  return (
    <div>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <img className="doctor" src={doctor} alt="Dentist photograph"  />
        <p>Nº: {dentista.id}</p>
        <p>Name: {dentista.name}</p>
        <p>E-mail: {dentista.email}</p>
        <p>Phone: {dentista.phone}</p>
        <p>Website: {dentista.website}</p>        
    </div>
  )
}

export default Detail