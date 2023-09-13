import React from 'react';
import { useState } from "react";

import ThemeContext, { themes } from './context';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Layout from './Components/Layout';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";

function App() {

  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <Router>
      <div className="App">
        <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
          <Layout>
            <Navbar />
            <Footer />
          </Layout>
        </ThemeContext.Provider>
      </div>
      <Routes>
        <Route path='/' element={<h2>Página de Inicio</h2>} />
        <Route path='/Home' element={<Home />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='contacto' element={<Contact />} />
        <Route path='favoritos' element={<Favs />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;