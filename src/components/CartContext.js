import { createContext, useContext, useState } from "react"
import React from 'react'


const CartContext = React.createContext([]);

const useCart=()=>{
    return useContext(CartContext)
}

const UseCartContext = ({children}) => {
    const[Productos, setProductos]=useState([]);

    const AddProd =(Producto)=>{
        setProductos(prevState=> prevState.concat(Producto))
    };

    const clearProd=()=>{setProductos([])}
    const QuitProd=(Producto)=>{
        setProductos(prevState=> prevState.splice(Producto))
    }

    const context= {
        Productos,
        AddProd,
        clearProd,
        QuitProd
    }
  return (
      <CartContext.Provider value={context}>
          {children}
      </CartContext.Provider>
  )
}
export {UseCartContext, useCart}