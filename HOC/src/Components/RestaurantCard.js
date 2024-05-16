import React, { Component } from "react"
import { CDN_URL } from "../utils/constants"

const RestaurentCard=(props)=>{
    const {resData} =props
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla}= resData?.info
   // console.log(CDN_URL+cloudinaryImageId)
    //optional chaining
        return (
            <div className='m-4 p-4 w-[250px] h-[350px] rounded-xl bg-gray-100 hover:bg-blue-200 shadow-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor : "#f0f0f0" }}>
            <img className="rounded-2xl h-[150px] w-[250px]" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ").slice("")}</h4>
            <div className="flex "><img className="w-6 mr-4" src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png"/>  <h3>{avgRating}</h3></div>
           
            <h3>{costForTwo}</h3>
            <h4>{sla?.deliveryTime} minutes</h4>
            </div>
        )
   
}



export const withVegLabel= (RestaurentCard)=>{
    return (props)=>{
      
        return(
            <div>
            <label className="absolute bg-green-400 text-black m-2 p-2 rounded-lg">Veg</label>

            <RestaurentCard {...props}/>

            </div>
            
        )
    }
}




export default RestaurentCard











// a function which takes a component as a argument and returns another component with enhanced features 


//a-> A 


// const withPromtedLabel=(RestaurantCard)=>{
//     return (props)=>{
//         return (
//             <div>
//                 <label>Label</label>
//                 <RestaurantCard {...props}/>
//             </div>
//         )
//     }

// }

// RestaurentCardWithLabel=withPromtedLabel(RestaurentCard)

// if (each.info.promted)? RestaurentCardWithLabel : RestaurentCard