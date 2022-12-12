import { Link } from "react-router-dom"
import React from 'react'





export const Item = ({ title, img, stock, id, price }) => {


    return(
<div class="card max-w-sm rounded overflow-hidden shadow-lg">
  <div className="cardImage"> <img class="w-full" src={process.env.PUBLIC_URL + `${img}`} alt={`Imagen del producto ${title}`}/> </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p className='price'>${price}</p>
    <p class="text-gray-700 text-base">
    Stock: {stock}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to={`/item/${id}`}>Ver más detalles</Link>
  </div>
</div>
    )
}

















