import React, { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import CategoryPage from '../src/pages/CategoryPage';
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CartComponent from './components/CartComponent';
import PaymentForm from "./pages/PaymentPage";
import { Toaster } from "react-hot-toast";

function App() {

  const [open, setOpen] = useState
  (false)

  return (
    <>
      <Toaster />
      <CartComponent open={open} setOpen={setOpen}/>
      <Header setOpen={setOpen}/>
      
      <div className="pt-2"> 
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='category/:id' element={<CategoryPage />}/>
        <Route path='product/:id' element={<ProductPage />}/>
        <Route path="cart" element={<CartPage />} />
        <Route path="payment" element={<PaymentForm />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
