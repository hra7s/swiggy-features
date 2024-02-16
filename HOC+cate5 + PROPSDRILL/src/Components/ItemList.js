import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
const ItemList = ({ items,dummy }) => {
  console.log(dummy)

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
       
          
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <p>{dummy}</p>
              
              <span>
                💵
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div  className="w-3/12">
          <div > <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute ">Add+</button></div>
         
          <img src={CDN_URL + item.card.info.imageId} className="rounded-2xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;




// functional component 
// normal js function which return jsx 


// Hook 
// Hook is a normal js utility function 
// useState useEffect 

//useState // with the help of useState, we can manage component state 

// useEffect 

// perform side effects of the component 

// api calls , dom operations schedulers , 

