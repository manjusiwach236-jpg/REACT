import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Home from './Pages/Home.jsx';
import Product from './Pages/Product.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar';

import ProtectedRoute from './Components/ProtectedRoute.jsx';
import CartProvider from './Components/CartProvider.jsx';

import Effect from './Pages/Effect.jsx';
import Products from './Pages/Products.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <>

        <Header openCart={openCart} />

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/product' element={<Product />} />
            <Route path='/products' element={<Products />} />
            <Route path='/effect' element={<Effect />} />
            <Route path='/navbar' element={<Navbar />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    </CartProvider>
  </StrictMode>
);
