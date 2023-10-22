import React, { useState,useRef } from 'react'

const UseRef = () => {

    const [y,setY]= useState(0)
    // let x=10
    let x=0
    const ref= useRef(0);
   
    //not like ref=0
    // ref={current:0}
  return (
    <div className='m-4 p-2 bg-slate-200 border border-black h-96 w-96'>
    <div> <button className='border border-black' onClick={()=>{x=x+1; console.log("x:",x)}}>Increase</button>
       <h1 className='font-bold'> Let x= {x}</h1></div>


       <div>
       <button className='border border-black' onClick={()=>{setY(y+1); console.log("y:",y)}}>Increase</button>
       <h1 className='font-bold'> State y= {y}</h1>
       </div>
       <div>
       <button className='border border-black' onClick={()=>{ref.current= ref.current+1; console.log("ref",ref.current)}}>Increase</button>
       <h1 className='font-bold'> Ref = {ref.current}</h1>
       </div>
    </div>
  )
}

export default UseRef