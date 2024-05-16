import React from 'react'
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';
import RestaurantCategeory from './RestaurantCategeory';



const RestaurantMenu = () => {
    // const [resInfo, setResInfo]= useState(null);
//  const params= useParams();
//  console.log(params)
    const {resId} =useParams();

    //resInfo has single responsiblity that means it is bother about fetching data

const resInfo= useRestaurantMenu(resId) 




    if (resInfo===null) return <Shimmer/>;


  const { name,cuisines,costForTwoMessage} =resInfo?.data.cards[2]?.card?.card?.info
//console.log(resInfo)


const categories= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((each)=>each.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 console.log("categories:",categories)


  return  (resInfo===null)?<Shimmer/>:(
    <div className='text-center'>
           
           <h1 className='font-bold my-5 text-2xl'>{name}</h1>
           <h2 className='font-bold'>{cuisines.join(",")}</h2>
           <p className='font-bold'>{costForTwoMessage}</p>
              {categories.map((category)=> <RestaurantCategeory data={category}/> )}  
    </div>
  )
}





export default RestaurantMenu






