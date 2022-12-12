import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { Products } from './Products'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  
const { idCategory } = useParams()

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
          resolve( Products )
        }, 2000);
    })
  }
 
useEffect(() => {

  if (idCategory){

    getProducts()
    .then(products => setProductList(products.filter(product => product.category == idCategory)))
    .catch(error => console.error(error))

   

  } else {
    getProducts()
    .then(products => setProductList(products))
    .catch(error => console.error(error))
  }

  return () => setProductList([])


}, [idCategory] )

  return (
    <>
    {
      productList.length ? <ItemList className="itemListContainer" productList={productList}/> : <h1>Loading...</h1>
    }   
    </>

  )

}
