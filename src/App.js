import React from 'react'
import './Styles/app.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import Cart from './Component/Cart'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App