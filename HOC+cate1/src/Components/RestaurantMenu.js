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


//     useEffect(()=>{
// fetchMenu();
//     },[])


    // if (resInfo.length===0){
    //     return <Shimmer />
    // }


    // const fetchMenu=async()=>{
    //   console.log(MENU_URL+resId)
    //     const data= await fetch( MENU_URL+resId);
       
    //     const json = await data.json();
    //     console.log(json)
    //     setResInfo(json)


    // }


    if (resInfo===null) return <Shimmer/>;


  const { name,cuisines,costForTwo} =resInfo?.data.cards[0]?.card?.card?.info
console.log(resInfo)


const categories= resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log(categories)


  return  (resInfo===null)?<Shimmer/>:(
    <div className='text-center'>
           
           <h1 className='font-bold my-5 text-2xl'>{name}</h1>
           <h2 className='font-bold'>{cuisines.join(",")}</h2>
           <p className='font-bold'>{"cost for two : "}{costForTwo/100}</p>
             {categories.map((category)=> <RestaurantCategeory data={category.card.card}/> )}  
            
           
           
           
    </div>
  )
}





export default RestaurantMenu


