import React from 'react'
import productos from '../productos.json'




export const ItemList = ({prods}) =>{

  return (

    <div>
        {prods.length ? (
          productos.map(u=><li className='produc'> 
          <h3>Producto: {u.producto}</h3> 
          <span > Id: {u.id} </span> 
          <p> Precio: {u.precio}</p> 
          <p>Descripcion: {u.info} </p></li>))
          :(<h2>cargando...</h2>)}

    </div>
  )
}