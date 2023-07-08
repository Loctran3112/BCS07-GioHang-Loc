import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Templates/Home';
import ProductItem from './Shop/ProductItem';
import HomePage from './Shop/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path='detail' element={<ProductItem />} />  
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


