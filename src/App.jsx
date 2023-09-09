import ThemeContext, {themes} from './context';

import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Layout from './Components/Layout';
import { useState } from "react";

import{
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
    <div className="App">
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        <Layout>
          <Navbar />
          <Footer />
        </Layout>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
