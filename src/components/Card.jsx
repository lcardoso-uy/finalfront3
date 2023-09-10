import React from "react";
import Detail from "../Routes/Detail";
import { Link } from "react-router-dom";
import doctor from "/images/doctor.jpg";


const Card = ({ id, name }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
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
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;