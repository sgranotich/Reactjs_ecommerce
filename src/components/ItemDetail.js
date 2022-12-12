import React, { useEffect, useState } from 'react'
import { Products } from './Products'
import { Contador } from './Contador'
import { useParams } from 'react-router-dom'


export const ItemDetail = ({title, img, price, stock}) => {

  const { id } = useParams()

  const [products, setProducts] = useState( [] )

const getProducts = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(Products.find(product => product.id == id)), 2000)
      })


    useEffect(() => {
        getProducts()
        .then(products => setProducts(products))
        .catch(error => console.error(error))
        
      }, [] )
      

  return (
  <div className='itemDetailContainer'>
    
    <div>
      <img className='imgDetail' src={process.env.PUBLIC_URL + `${products.img}`} alt={"Imagen del producto"}/> 
    </div>
    <div className='itemDetail'>  
        <h2>{products.title}</h2>
        <h3 className='price'>$ {products.price}</h3>
        <p className='stock'>Stock: {products.stock}</p>
        <Contador/>
    </div>
  </div>
    

  )
}

