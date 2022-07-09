import { Route, Routes } from "react-router-dom"
import CartScreen from "./components/Cart/Cart"
import HomeScreen from "./components/Home/Home"
import LoginScreen from "./components/Login/Login"
import ProductScreen from "./components/Products/Product"
import ProtectedRoutes from "./components/ProtectedRoutes"
import PurchasesScreen from "./components/Purchases/Purchases"
import HeaderScreen from "./components/Shared/Header"
import { getAllproducts } from '../src/store/slices/products.slice'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'


function App() {

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getAllproducts())
  }, []) 

  return (
    <div className="App">
      <HeaderScreen />
      <main className="main">
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/purchases" element={<PurchasesScreen />} />
          </Route>
          <Route path="/product/:id" element={<ProductScreen/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App