import React from 'react';
import {useState} from 'react';


function ItemCount(){
    const[counter,setcounter]= useState(1)

    const tocar=()=>{
      if (counter>0)  setcounter(counter - 1)
    }
    const tocar2=()=>{
      if(counter<5)  setcounter(counter+1)
    }
return(

<div>
<button onClick={tocar} className='boton'>Quitar</button>
<strong className='compra'>Compras: {counter}</strong>
<button onClick={tocar2} className='boton'>Agregar</button>
</div>
)
}

export default ItemCount