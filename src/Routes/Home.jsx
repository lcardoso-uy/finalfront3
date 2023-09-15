import React, { useState, useEffect, useContext } from 'react';

import ThemeContext from "../context";
import { FavoritesContext } from '../context';

import Card from '../Components/Card';


const Home = () => {

  const { theme } = useContext(ThemeContext);
  const { state, dispatch } = useContext(FavoritesContext);

  const [odontologos, setOdontologos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setOdontologos(data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMsg("Error al obtener respuesta api - " + error);
      });
  }, [])

  return (
    <main className="" style={{ background: theme.background, color: theme.font }}>
      <h1>Home</h1>
        {loading ? (
          <p>Cargando...</p>
        ) : errorMsg ? (
          <p>{errorMsg}</p>
        ) : (
          <div className='card-grid'>
          {odontologos.map(odontologo => (
              <Card 
                key={odontologo.id}
                id={odontologo.id}
                name={odontologo.name}
                isFavorite={state.favorites.includes(odontologo.id)}
              />
            ))}
          </div>
        )}
    </main>
  )
}

export default Home;