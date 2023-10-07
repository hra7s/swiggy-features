import React from "react";
import ItemList from "./ItemList";

const RestaurantCategeory = ({ data }) => {
  //console.log(data)

  const handleClick=()=>{
    console.log("clicked")
  }

  return (
    <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 ">
      <div className="flex justify-between " onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

     <ItemList items={data.itemCards} />  
    </div>
  );
};

export default RestaurantCategeory;


