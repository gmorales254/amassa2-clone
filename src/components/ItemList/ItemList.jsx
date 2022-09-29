import React from 'react'
import Item from '../Item/Item'


const ItemList = ({items}) => {
  return (
    <div className="row row-cols-1 row-cols-md-3">
      {items.map((item,index)=>
        <Item key={index} id={item.id} nombre={item.nombre} precio={item.precio} stock={item.stock} imgUrl={item.imgUrl} descripcion={item.descripcion} categoria={item.categoria}/>
      )}
    </div>
    
  )
}

export default ItemList