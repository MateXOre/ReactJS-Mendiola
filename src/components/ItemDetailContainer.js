import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from "../Products";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const[prods, setProds]= useState([]);
    const{id} =useParams ()


    useEffect(() => {
        getItem().then((res) => {
            setProds(res);})
            .catch((err) => console.log(err, "error al cargar productos"));
            },[]);

    const getItem= () =>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
          resolve(products.find(p =>p.id== id));
          reject('Salio mal');
      }, 2000);
    })}



  return (
    <ItemDetail prods={prods}/>
  )
}

export default ItemDetailContainer