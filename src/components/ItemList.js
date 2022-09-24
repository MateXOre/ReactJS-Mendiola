import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import products from "../Products";





export const ItemList = ({prods}) =>{ 


  const {AddProd}= useContext(CartContext)
  const {clearProd}= useContext(CartContext)
  const {quitProd}= useContext(CartContext)

  
  return (

    <div>
        {prods.length ? (
          products.map(u=><li className='produc'>
            <><Link to={u.ids}>
          <img src={u.img} class="imgs"></img>
          <h3>Producto: {u.producto}</h3> 
          <span > Id: {u.id} </span> 
          <p> Precio: ${u.precio}</p> 
          <p>Descripcion: {u.info} </p>
          </Link>
          </>
          <button class="itemButton" onClick={()=>{AddProd(u);}}>
               Agregar</button>
          <button class="itemButton" onClick={()=>{quitProd(u)}}>
              Quitar</button>
          <button class="itemButton" onClick={clearProd}>
              Limpiar lista</button>

          </li>))
          :(<h2>cargando...</h2>)}



    </div>
  )
}