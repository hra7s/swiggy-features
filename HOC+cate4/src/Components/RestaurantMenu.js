import React, { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategeory from "./RestaurantCategeory";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const [showIndex,setShowIndex]=useState(null)

  //resInfo has single responsiblity that means it is bother about fetching data

  const resInfo = useRestaurantMenu(resId);

 

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.data.cards[0]?.card?.card?.info;
  console.log(resInfo);

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <h2 className="font-bold">{cuisines.join(",")}</h2>
      <p className="font-bold">
        {"cost for two : "}
        {costForTwo / 100}
      </p>
      {categories.map((category,index) => (

        // here restaurantcategeory is controlled by res menu . so rescate is called controlled component
        // rescat is uncontrolled component  when it maintains it their own state
        <RestaurantCategeory
          key={category.card.card.title}
          data={category.card.card}
          //showItem={index===5? true: false }
       showItem={index===showIndex? true:false}
         setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;


