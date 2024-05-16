import React from 'react'

const RestaurantCategeory = (props) => {
  console.log(props)
const {title,itemCards} = props.data.card.card
    
  return (
    <div className=" flex justify-between  w-6/12  m-auto  bg-gray-50 my-2 p-4 shadow-xl">
        <span className='font-bold text-lg'>{title} ({itemCards.length})</span>
        <span>⬇️</span>
        
    </div>
  )

}

export default RestaurantCategeory

// w-6/12 m-auto my-2 shadow-lg flex justify-between p-4 bg-red-100