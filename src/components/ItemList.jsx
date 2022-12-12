
import React from 'react'
import {Item} from './Item'

export const ItemList = ({productList}) => {

  return (
    <div className="cardList">
      {
        productList.map(item => <Item id={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price}/>)
      }
    </div>
  )
}



