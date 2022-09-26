import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div class="NavBar">


        <Link to={'/'}><li class="titulo">El rincon</li></Link>   
        <Link to={'/'}><li class="nav"><a href='#'>Inicio</a></li></Link>
        <Link to={'/'}><li class="nav"><a href='#'>Entretenimiento</a></li></Link>
        <Link to={'/'}><li class="nav"><a href='#'>Hogar</a></li></Link>
        <Link to={'/'}><li class="nav"><a href='#'>Cotidiano</a></li></Link>
        <Link to={'/cart'}><li class="nav"><CartWidget/> </li></Link>

    </div>
  )
}

export default NavBar