import React from "react";
import { useContext } from "react";

import ThemeContext from "../context";

import Card from "../Components/Card";

const Favs = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.font }} >
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;