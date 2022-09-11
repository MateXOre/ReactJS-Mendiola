import React from 'react';
import {ItemList} from './ItemList';
import { useEffect, useState} from 'react';
import productos from '../productos.json';
import ItemCount from './ItemCount';

function ItemListContainer() {
  const[prods, setProds]= useState([]);



const getProd= (data, time) =>
new Promise((resolve, reject)=>{
  setTimeout(() => {
    if (data) {
      resolve(data);
    } else {
      reject("error");
    }
  }, time);
})

useEffect(() => {
getProd(productos, 2000).then((res) => {
  setProds(res);})
  .catch((err) => console.log(err, "error al cargar productos"));
  },[]);
  
  return (
    <div>
    <h1>Bienvenidos a la tienda</h1>
    <ItemList prods={prods}/>
    <ItemCount/>
    </div>

  )
}

export default ItemListContainer