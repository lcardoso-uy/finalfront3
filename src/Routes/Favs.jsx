import React from "react";
import { useContext, useState, useEffect } from "react";

import ThemeContext from "../context";
import { FavoritesContext } from '../context';

import Card from "../Components/Card";

const Favs = () => {

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
    <div style={{ background: theme.background, color: theme.font }} >
      <h1>Dentists Favs</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : errorMsg ? (
        <p>{errorMsg}</p>
      ) : (
        <div className='card-grid'>
          {odontologos
            .filter(odontologo => state.favorites.includes(odontologo.id))
            .map(odontologo => (
              <Card
                key={odontologo.id}
                id={odontologo.id}
                name={odontologo.name}
                isFavorite={true}  // Dado que estamos filtrando, sabemos que todos son favoritos
              />
            ))
          }
        </div>
      )}
    </div>
  );
};

export default Favs;