import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

export const NavBar = () => {
  return (
    <div className="flex navbar">
      <div>
        <Link to={'/'}><img className='logo' src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"></img></Link>
      </div>
      <ul className='nav-items'>      
        <Link to={'/category/receta'}>
        <li>Lentes de receta</li>
        </Link>
        <Link to={'/category/kids'}>
        <li>Kids</li>
        </Link>
        <Link to={'/category/sol'}>
        <li>Lentes de sol</li>
        </Link>
      </ul>
      <CartWidget/>
    </div>
  )
}
