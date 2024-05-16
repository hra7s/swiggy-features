import React from 'react'

const Dummy = () => {
    let count=0
    const handleItem=()=>{
        count=count+1
        console.log(count)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleItem}>click</button>
    </div>
  )
}

export default Dummy