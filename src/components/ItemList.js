import React from 'react'
import productos from '../productos.json'
import { Link } from 'react-router-dom'




export const ItemList = ({prods}) =>{

  return (

    <div>
        {prods.length ? (
          productos.map(u=><li className='produc'>
            <Link to={u.ids}>
          <img src={u.img} class="imgs"></img>
          <h3>Producto: {u.producto}</h3> 
          <span > Id: {u.id} </span> 
          <p> Precio: ${u.precio}</p> 
          <p>Descripcion: {u.info} </p>
          </Link>
          </li>))
          :(<h2>cargando...</h2>)}

    </div>
  )
}