import React, { useMemo } from "react";
import { useState } from "react";
import findNthPrime from "../utils/prime";

const UseMemo = () => {
  const [a, setA] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Rendering..........");
  const prime =()=> findNthPrime(a);
  //const prime =useMemo(()=> findNthPrime(a),[a]);
  console.log(prime)
  return (
    <div
      className={
        "m-4 p-4 w-96 h-96 border border-black" + (isDarkTheme && " bg-gray-900 text-white")
      }
    >
    <div>
      <button className="m-10 p-2 bg-green-200" onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
    </div>
      <div>
        <input
          className="border border-black w-72 p-2"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div>
        <h1>nth Prime : {prime}</h1>
      </div>
      UseMemo
    </div>
  );
};

export default UseMemo;
