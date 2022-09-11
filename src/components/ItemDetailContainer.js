import React from 'react'
import { useEffect, useState } from 'react';
import products from "../Products";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const[prods, setProds]= useState([]);


    useEffect(() => {
        getItem().then((res) => {
            setProds(res);
            console.log(res)})
            .catch((err) => console.log(err, "error al cargar productos"));
            },[]);

    const getItem= () =>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
          resolve(products[0]);
          reject('Salio mal');
      }, 2000);
    })}
    


  return (
    <ItemDetail prods={prods}/>
  )
}

export default ItemDetailContainer