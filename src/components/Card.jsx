import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FavoritesContext } from "../context";
import ThemeContext from '../context';

import doctor from "/images/doctor.jpg";

const Card = ({ id, name, isFavorite }) => {

  const { dispatch } = useContext(FavoritesContext);

  const addFav = ()=>{    
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: id });
    }
  }

  const { theme, handleChangeTheme } = useContext(ThemeContext);
  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/detail/${id}`} >
        <img className="doctor" src={doctor} alt="Dentist photograph"  />
        <p className="center" style={{ background: theme.background, color: theme.font }}>Nº: {id}</p>
        <p className="center" style={{ background: theme.background, color: theme.font }}>Name: {name}</p>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detail/${id}`} className="moreinfo">More info</Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton" style={{ background: theme.background, color: theme.font }}>{isFavorite ? 'Remove fav' : 'Add fav'}</button>
    </div>
  );
};

export default Card;