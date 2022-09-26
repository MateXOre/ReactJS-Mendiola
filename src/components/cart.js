import React, { useContext } from 'react'
import { CartContext } from './CartContext'


const ItemCart=({item})=>{
    const {AddProd, quitProd} = useContext(CartContext);
    
    return <div>
        <img src={item.img}/>
        <div>
            <div>
                <p>{item.name}</p>
                <div>
                    <button onClick={()=> AddProd(item)}>Agregar</button>
                    <button onClick={()=> quitProd(item)}>Sacar</button>

                </div>
            </div>
            <div>
                <div>
                    {item.amount}
                    <p>Total: ${item.amount* item.price}</p>
                </div>
            </div>
        </div>
        </div>
};

export default ItemCart;