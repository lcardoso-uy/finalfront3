import React from 'react'
import { useState, useEffect } from 'react'

import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
//TODO - Estilos

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
        //TODO Renderizar error
        console.error("Error al obtener respuesta api - ", error);
      });
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div>
            {odontologos.map(odontologo => (
              <Card
                key={odontologo.id}
                id={odontologo.id}
                name={odontologo.name}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default Home