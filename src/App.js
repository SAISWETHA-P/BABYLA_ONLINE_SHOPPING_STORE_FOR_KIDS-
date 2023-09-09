import React from 'react';
import './App.css';
import HomePage from './HomePage';
import Cart from './cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;