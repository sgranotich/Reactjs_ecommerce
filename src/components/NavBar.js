import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="flex navbar">
      <div>
        <img className='logo' src="logo.png" alt="logo"></img>
      </div>
      <ul>      
        <li>
          <a href="#">Lentes de receta</a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>
        <li>
          <a href="#">Lentes de sol</a>
        </li>
      </ul>
      <CartWidget/>
    </div>
  )
}

export default NavBar
