import React from "react";
import ItemList from "./ItemList";

const RestaurantCategeory = (props) => {
  //console.log(data)
const {itemCards,title}= props.data.card.card
  const handleClick=()=>{
    console.log("clicked")
  }

  return (
    <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 ">
      <div className="flex justify-between " onClick={handleClick}>
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

     <ItemList items={itemCards} />    
    </div>
  );
};

export default RestaurantCategeory;


