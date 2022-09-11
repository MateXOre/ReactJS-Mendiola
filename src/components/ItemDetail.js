import React from "react"
const ItemDetail = ({prods}) => {

  return (

    <div>
      <li>{prods.producto}</li>
      <li>{prods.precio}</li>
      <li>{prods.id}</li>
      <li>{prods.categoria}</li>
      <li>{prods.info}</li>


    </div>
  )
}

export default ItemDetail