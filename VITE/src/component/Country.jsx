import  { useState } from 'react';
import data from "../data"

const Country = () => {
  const [country,setCountry]= useState("")
  const [state,setState] = useState([])

  
  return (
    <div>
      <label htmlFor="country">Select Country:</label>
      <select id="country" onChange={(e)=>{

        setCountry(e.target.value)
        setState( ()=>{
     
     const out=data.find(each=>each.country_name==e.target.value)
     console.log(out)

       return out
   })
console.log(e.target.value)
      }} >
        <option value="">Select</option>
        {data.map(country => (
          <option key={country.id} value={country.country_name}>{country.country_name}</option>
        ))}
      </select>

<select >
{
  
    state.states.map((each,index)=>  <option key={index}>{each.state_name}</option>)
  }
    

</select>
    
    </div>
  );
};





export default Country 
