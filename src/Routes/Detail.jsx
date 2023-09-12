import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from "react";

import ThemeContext from "../context";
import doctor from "/images/doctor.jpg";

const Detail = () => {

  const { theme } = useContext(ThemeContext);

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
    <div style={{ background: theme.background, color: theme.font }} className = 'center'>
      <h1>Dentist Detail Info </h1>
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