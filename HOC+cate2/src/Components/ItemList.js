import React from "react";
import { CDN_URL } from "../utils/constants";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

// import { FaRupeeSign } from "react-icons/fa"; 
import { TbCoinRupeeFilled } from "react-icons/tb";
const ItemList = (props) => {
  const {items} =props
  console.log(items)
  
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
              <span className="flex">
              <BsFillCreditCard2BackFill />
              <TbCoinRupeeFilled className="my-1" /> {item.card.info.price ? item.card.info.price / 100: item.card.info.defaultPrice/100}
                 
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div  className="w-3/12">
          <div > <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute ">Add+</button></div>
         {
          item.card.info.imageId && <img src={CDN_URL + item.card.info.imageId} className="rounded-2xl" />
         }
          
          </div>
          
          
        </div>
      ))}
    </div>
  );
};

export default ItemList;
