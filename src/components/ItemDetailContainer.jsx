
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { Products } from './Products'

export const ItemDetailContainer = () => {



const { id } = useParams()


const [item, setItem] = useState([])

const getProducts = () => new Promise((resolve, reject) => {
  setTimeout(()=> resolve(Products.find(product => product.id == id)), 2000)
})

useEffect(() => {
  getProducts()
  .then(response => setItem(response))
}, [])


  return (
      <ItemDetail item={item}/>
  )
}


