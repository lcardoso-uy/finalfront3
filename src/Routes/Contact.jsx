import React from 'react';
import { useContext } from "react";
import ThemeContext from "../context";
import Form from '../Components/Form';

const Contact = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact;