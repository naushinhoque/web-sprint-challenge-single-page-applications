import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Form from './Components/Form';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div className='nav-links'>
        <Link to="/">Home </Link> 
        <Link to="pizza">Pizza Form </Link> 
        <Link to="/pizza" id="order-pizza">Home </Link> 

        <Routes>
          <Route path="pizza" element={<Form />} />
        </Routes>
        
      </div>
    </>
  );
};
export default App;
