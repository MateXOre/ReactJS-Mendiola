import React, { useContext, useState, useEffect } from 'react'
import imgcart from "../resources/carrito.png"
import ItemCart from './cart';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  const {cartItems}= useContext (CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous+current.amount, 0)
    );
  }, [cartItems]);

  const total= cartItems.reduce((previous, current) => previous + current.amount * current.precio, 0)
  

  return (<div>
    <div>
      <div>
        <img class="carrito" src={imgcart} alt='carrito'/>
      </div>
      {!cartOpen && <div className='cartNumber'>{productsLength}</div>}
    </div>
    {cartItems && cartOpen && (
      <div>
        <h2>Tu carrito</h2>
        {cartItems.Length===0  ? <p>Tu carrito esta vacio</p> :(
          <div>
            {cartItems.map((item,i) =>(
            <ItemCart key={i} item={item}/>
            ))}</div>
        )}
        <h2>Total: ${total}</h2>
      </div>


    )}
  </div>
  )
};

export default CartWidget