import React from 'react';
import { useState } from "react";

import ThemeContext, { themes } from './context';
import { FavoritesProvider } from './context';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Layout from './Components/Layout';

import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import NoPage from './NoPage';

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
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <FavoritesProvider>
        <Router>
          <div className="App">
            <Layout>
              <Navbar />
            </Layout>
            <Routes>
              <Route path='/' element={<h2 className='center'>Página de Inicio</h2>} />
              <Route path='/Home' element={<Home />} />
              <Route path='detail/:id' element={<Detail />} />
              <Route path='contacto' element={<Contact />} />
              <Route path='favoritos' element={<Favs />} />
              <Route path='*' element={<NoPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </FavoritesProvider>
    </ThemeContext.Provider>
  );
}

export default App;