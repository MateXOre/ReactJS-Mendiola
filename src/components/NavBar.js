import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div class="NavBar">


        <li class="titulo">El rincon</li>
        <li class="nav"><a href='#'>Inicio</a></li>
        <li class="nav"><a href='#'>Productos</a></li>
        <li class="nav"><a href='#'>Sobre Nosotros</a></li>
        <li class="nav"><a href='#'>Contacto</a></li>
        <li class="nav"><a href='#'>Login</a></li>
        <li class="nav"><CartWidget/> </li>

    </div>
  )
}

export default NavBar