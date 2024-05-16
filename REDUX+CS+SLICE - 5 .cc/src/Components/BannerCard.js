import React from 'react'
import { CDN_URL } from '../utils/constants'

const BannerCard = (props) => {

  const {imageId}= props.data


  return (
    <div>
         <img className=' w-36  rounded-2xl m-2 p-2  h-36' src={CDN_URL+imageId}/> 
    </div>
  )
}

export default BannerCard


