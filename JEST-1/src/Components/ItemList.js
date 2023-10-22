import React from "react";
import { CDN_URL } from "../utils/constants";
import {useDispatch} from "react-redux"
import {addItem} from "../utils/store/cartSlice"

const ItemList = ({ items,dummy }) => {
  
const dispatch= useDispatch();
const handleAddItem=(item)=>{
 console.log(item )
  // dispatch an action
  dispatch(addItem(item))

}
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
          <div > <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute " onClick={()=>handleAddItem(item)}>Add+</button></div>
         
          <img src={CDN_URL + item.card.info.imageId} className="rounded-2xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
