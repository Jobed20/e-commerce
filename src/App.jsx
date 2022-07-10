import { Route, Routes } from "react-router-dom"
import Cart from "./components/Cart/Cart"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Products from "./components/Products/Products"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Purchases from "./components/Purchases/Purchases"
import Header from "./components/Shared/Header"
import { getAllproducts } from '../src/store/slices/products.slice'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import axios from "axios"


function App() {

  useEffect(() => {
    const newUser = {

      firstName: "jose",
      lastName: "estrada",
      email: "jestrada@gmail.com",
      phone: "1234567891",
      role: "admin",
      status: "available"
    }
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users', newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }, [])

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getAllproducts())
  }, []) 

  return (
    <div className="App">
      <Header  />
      <main className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/purchases" element={<Purchases />} />
          </Route>
          <Route path="/product/:id" element={<Products/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App