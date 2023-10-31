import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import "../../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  //when ever state variable updates react rerenders /
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnReact]);

  // const btnReact="Login"
  return (
    <div className="header">
      <div className="logo">
        <img alt="data" className="logo" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li>Online Status :{onlineStatus ? "🟢" : "🔴"}</li>

          <li>
           
            <Link to="/"> Home</Link>
          </li>
          <li>
            {/* <Link to="/about">AboutUs</Link> */}
            <a href='/about'>AboutUs</a> 
          </li>
          <li>
            {/* <a href="/contact" >Contact us</a> */}
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li>Cart</li>
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
        </ul>
        {console.log("inside header")}
      </div>
    </div>
  );
};

export default Header;



