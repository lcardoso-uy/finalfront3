import React, { useContext } from "react";
import { Link } from "react-router-dom";

import doctor from "/images/doctor.jpg";
import Detail from "../Routes/Detail";
import { FavoritesContext } from "../context";

const Card = ({ id, name, isFavorite }) => {

  const { dispatch } = useContext(FavoritesContext);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: id });
    }
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="doctor" src={doctor} alt="Dentist photograph"  />
        <p>Nº: {id}</p>
        <p>Name: {name}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detail/${id}`}>Detalle</Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{isFavorite ? 'Remove fav' : 'Add fav'}</button>
    </div>
  );
};

export default Card;