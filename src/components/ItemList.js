import React, {useState } from 'react'




function ItemList() {
    const [users, setUsers]= useState([
        {"producto":"Celular", "precio":"20000", "id":"1", "info":"Gran calidad de camara, buena bateria" },
        {"producto":"Televisor", "precio":"40000", "id":"2", "info":"Definicion 4k y control de voz"},
        {"producto":"Licuadora", "precio":"5000", "id":"3", "info":"Potencia de 800W"},
        {"producto":"Smartwatch", "precio":"4000", "id":"4", "info":"A prueba de agua"},
        {"producto":"Webcam", "precio":"3000", "id":"5", "info":"Grabacion a FullHD con microfono integrado"},
        {"producto":"Auriculares", "precio":"6000", "id":"6", "info":"Calidad de 22KHz"},

    ])


  return (

    <div> 

        {users.map(u=><li className='prods'> <h3>Producto: {u.producto}</h3> <span > Id: {u.id} </span> <p> Precio: {u.precio}</p>  <p>Descripcion: {u.info} </p></li>)}
        

        </div>
  )
}

export default ItemList