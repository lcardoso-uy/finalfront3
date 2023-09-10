import React from "react";


const Card = ({ id, name, email, phone, website }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <p>Name: {name}</p>
        <p>E-mail: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};


export default Card;