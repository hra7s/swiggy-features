import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'

const Cart = () => {
     
    const cartItems= useSelector((store)=>store.cart.items)
    console.log(cartItems) //[itemR. itemB]
  return (
    <div className='text-center ali m-5 p-5'>
    <h1 className='text-2xl font-bold '>
        Cart
    </h1>
     <div className='w-6/12 m-auto'>

     <button className='p-2 m-2 bg-black text-w rounded-lg'>Clear Item</button>
        <ItemList items={cartItems}/>
    </div> 
        
    </div>
  )
}

export default Cart