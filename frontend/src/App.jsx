import React from 'react'
import Navbar from './components/Navbar/Navbar'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className='app'>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/order' element={<PlaceOrder/>} />
  
</Routes>
    </div>
  )
}

export default App