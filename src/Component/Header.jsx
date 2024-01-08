import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
const Header = () => {
  
  const {Itemcart}=useSelector((state)=>state.prodtItem)
  console.log()
  return (
   <nav className='nav_class'>
      <h2>Shopping</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">
        <FaCartShopping />
        <p>
          {
            Itemcart.length
          }
        </p>
        </Link>
      </div>
   </nav>
  )
}

export default Header