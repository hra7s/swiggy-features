import React from 'react'

const RestaurantCategeory = ({data}) => {
    console.log(data)
  return (
    <div className="w-6/12 m-auto my-2 shadow-lg p-4 flex justify-between bg-gray-50">
        <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
    </div>
  )
}

export default RestaurantCategeory
