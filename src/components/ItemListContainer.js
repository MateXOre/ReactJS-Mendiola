import React from 'react'
import {ItemList} from './ItemList'
import { useEffect, useState} from 'react'
import productos from '../productos.json'


function ItemListContainer() {
  const[prods, setProds]= useState([]);


  useEffect(() => {
const getProd=new Promise((resolve, reject)=>{
  setTimeout(() => {
    if (productos.lenght) {
      resolve(productos);
    } else {
      reject("error");
    }
  }, 2000);
})

getProd.then((res) => {
  setProds(res);})
  .catch((err) => console.log(err, "error al cargar productos"));
  },[]);
  
  return (
    <div>
    <h1>Bienvenidos a la tienda</h1>
    <ItemList prods={prods}/>
    </div>

  )
}

export default ItemListContainer