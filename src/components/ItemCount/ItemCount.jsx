import React from 'react'
import {useState} from "react";

const ItemCount = ({stock,initial,onAdd}) => {
    const [contador, setContador] = useState(initial);
    
    const aumentarUnidades = () =>{
        if(contador < stock){
            setContador(contador+1)
        }
    }
    
    return (
        <div className="mt-4">
            <button className="btn btn-danger " disabled={contador === initial } onClick={()=>{ setContador(contador-1)}} >-</button>
            <span className="m-4">{contador} u.</span>
            <button className="btn btn-success " disabled= {stock <= contador} onClick={aumentarUnidades} >+</button>
            <br></br>
            <button disabled= {stock === 0} className="btn btn-dark mt-2" onClick={()=> onAdd(contador)}>Agregar producto</button>
            <br></br>
            
        </div>
        
    )
}

export default ItemCount