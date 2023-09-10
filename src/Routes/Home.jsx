import React from 'react'
import { useState, useEffect } from 'react'

import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [odontologos, setOdontologos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setOdontologos(data);
        setLoading(false);
      })
      .catch((error) => {
        //Renderizar error
        console.error("Error al obtener respuesta api - ", error);
      });
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div>
            {odontologos.map(odontologo => (
              <Card
                key={odontologo.id}
                id={odontologo.id}
                name={odontologo.name}
                email={odontologo.email}
                phone={odontologo.phone}
                website={odontologo.website}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default Home