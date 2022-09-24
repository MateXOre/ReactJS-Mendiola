import { createContext, useState, useContext, useEffect } from "react"; 
import React from 'react'


export const CartContext = createContext();

export const useCart=()=>{
  return useContext(CartContext)
}

export const CartProvider = ({children}) => {
    const[cartItems, setCartItems]=useState(() =>{
        try {
            const productosLocalStorage = localStorage.getItem('cartProducts');
            return productosLocalStorage ? JSON.parse(productosLocalStorage) : [];
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
        console.log(cartItems);
    }, [cartItems])

    

    const AddProd =(product)=>{
        const inCart= cartItems.find(
            (productInCart) => productInCart.id === product.id
        );


        if (inCart){
            setCartItems(
                cartItems.map((productInCart)=>{
                    if(productInCart.id === product.id){
                        return{...inCart, amount: inCart.amount + 1}
                    } else return productInCart;
                })
            );
        } else {
            setCartItems([...cartItems, {...product, amount:1}])
        }
    };

    const clearProd=()=>{setCartItems([])
    };

    const quitProd=(product)=>{
        const inCart= cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if(inCart.amount ===1 ){
            setCartItems(
                cartItems.filter(productInCart => productInCart.id !== product.id)
            )
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                if(productInCart.id === product.id){
                    return{...inCart, amount: inCart.amount -1}
                } else {
                    return productInCart;
                }
            }));
        }
    };

    const context= {
        cartItems,
        AddProd,
        clearProd,
        quitProd
    }
  return (
      <CartContext.Provider value={context}>
          {children}
      </CartContext.Provider>
  )
}
