import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import "../../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import Abc from "../utils/Abc";

const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //useContext is used to acces the data from gobal store
  const {loggedInUser}=useContext(Abc)
  console.log(loggedInUser)
  //when ever state variable updates react rerenders /
  useEffect(() => {
    // console.log("useEffect Called");
  }, [btnReact]);

  // const btnReact="Login"
  return (
    <div className="flex justify-between bg-amber-300 lg:bg-orange-200 shadow-lg ">
      <div className="logo">
        <img alt="data" className="w-32 rounded-xl" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul className="flex items-center p-4 m-4">
          <li className="px-4">Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            {/* <Link to="/about">AboutUs</Link> */}
            <a href='/about'>AboutUs</a> 
          </li>
          <li className="px-4">
            {/* <a href="/contact" >Contact us</a> */}
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnReact === "Login"
                ? setBtnReact("LogOut")
                : setBtnReact("Login");
            }}
          >
            {btnReact}
          </button>
           <li className="px-4">{loggedInUser}</li> 
        </ul>
        {/* {console.log("inside header")} */}
      </div>
    </div>
  );
};

export default Header;



