import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from  './components/Cart'
import ErrorPage from './components/ErrorPage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Register from './components/form/register'
import Login from './components/form/Login'
import { useDispatch } from 'react-redux'
import { loadUser } from './store/authSlice'
import CheckoutSuccess from './components/payment/CheckoutSuccess'

function App() {


  const dispatch = useDispatch();
  dispatch(loadUser());
  return (
    <div className="App">
      <ToastContainer
      />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout-success" element={<CheckoutSuccess/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App
