import React, { useState } from 'react'
import ItemList from './ItemList'
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const RestaurantCategeory = ({data}) => {
  const [showItem,setShowItems]= useState(false)
 const handleItems=()=>{
 //setShowItems(true)
setShowItems(!showItem) //showItem=false , showItem= true 
//console.log("clicked")
 }
  return (
  
    <div className='w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4'>
    <div className='flex justify-between  cursor-pointer' onClick={handleItems}>
    <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
       {showItem ?<span><FaArrowUp /></span>: <span><FaArrowDown /></span> } 
    </div>
        
    {showItem && <ItemList items={data.itemCards}/>}
      </div>
       
  )
}

export default RestaurantCategeory







//uncontrolled component 