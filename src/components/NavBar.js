import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div class="NavBar">


        <li class="titulo">El rincon</li>
        <li ><a href='#'>Inicio</a></li>
        <li><a href='#'>Productos</a></li>
        <li><a href='#'>Sobre Nosotros</a></li>
        <li><a href='#'>Contacto</a></li>
        <li><a href='#'>Login</a></li>
        <li><CartWidget/> </li>

    </div>
  )
}

export default NavBar