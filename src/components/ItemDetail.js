import React from "react"

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
      </div>

    </div>
  )
}

export default ItemDetail