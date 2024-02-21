"use client"
import React from 'react'
import {useEffect,usestate} from 'react'

const Productlist = () => {
    const [product,setProduct] = usestate([])  //state variable to store
    useEffect(async()=>{

    let data = await fetch("https://jsonplaceholder.typicode.com/users")
    data = await data.json()
    console.log(data);
    setProduct(data.product)
    },[])
  return (
    <>
      <h1>Product list</h1>
      {product.map((item)=>{
         <h1>{item.name}</h1>
      })}
    </>
  )
}

export default Productlist