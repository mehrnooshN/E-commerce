import "./App.css";
import React, { Fragment, useState} from "react";
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Login from "./components/Login/Login";
import RootLayout from './components/RootLayout';
import { useDispatch, useSelector } from "react-redux";
import { sendCartData  ,getCartData } from "./store/cart-actions";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import { getProducts } from "./store/search-actions";

import { useEffect } from 'react';


const router = createBrowserRouter([{
  path:'/' , element : <RootLayout/> ,
  children :[
    {
      path:'/Login' , element : <Login/>
    },
   {path:'/' , element : <Products/>}
  ,
    {
    path:'/ShoppingCart' , element : <Cart/>
  }]
}
])

function App() {
const cart = useSelector(state => state.cart);
const dispatch =useDispatch();


useEffect(() => { dispatch(getCartData(cart)) }, [dispatch])

useEffect(() => { 
  if(cart.changed){
    dispatch(sendCartData(cart)) 
  
  }
  

}, [dispatch , cart])

  
return (
  <RouterProvider router={router} />
  );
}

export default App;
