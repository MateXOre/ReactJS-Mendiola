import React from 'react';
import { Link } from 'react-router-dom'
import {useState} from 'react';


const ItemCount= ({cont} )=>{
    const[contador,setcounter]= useState(1)

return(

<div>
<strong className='compra'>Compras: {cont.amount}</strong>;
<Link to={"/cart"}>
<strong>Terminar compra</strong>
</Link>
</div>
)
}

export default ItemCount