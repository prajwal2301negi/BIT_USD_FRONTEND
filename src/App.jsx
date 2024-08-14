import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Market from './Pages/Market'


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/market' element={<Market/>} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
