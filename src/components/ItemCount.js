import React from 'react';
import {useState} from 'react';


function ItemCount(){
    const[contador,setcounter]= useState(1)

    const tocar=()=>{
      if (contador>0)  setcounter(contador - 1)
    }
    const tocar2=()=>{
      if(contador<5)  setcounter(contador+1)
    }
return(

<div>
<button onClick={tocar} className='boton'>Quitar</button>
<strong className='compra'>Compras: {contador}</strong>
<button onClick={tocar2} className='boton'>Agregar</button>
</div>
)
}

export default ItemCount