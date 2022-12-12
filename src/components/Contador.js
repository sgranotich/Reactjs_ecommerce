import React, { useState } from 'react'

export const Contador = () => {

const [contador, setContador] = useState(0);



  return (
    <div>
        <button className='btn_left  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={()=> setContador(contador + 1)}>+</button>
        {contador}
        <button className='btn_right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={()=> setContador(contador - 1)}>-</button>
    </div>
  )
}














