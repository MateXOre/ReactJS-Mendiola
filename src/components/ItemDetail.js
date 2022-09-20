import React from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({prods}) => {

  return (

    <div>
      <img class="img" src={prods.img}></img>
      <h3>Producto: {prods.producto}</h3>
      <div class="border">
      <li>Precio: ${prods.precio}</li>
      <li>Id: {prods.id}</li>
      <li>Categoria: {prods.categoria}</li>
      <span>Descripcion: {prods.info}</span>
      <ItemCount/>
      </div>

    </div>
  )
}

export default ItemDetail