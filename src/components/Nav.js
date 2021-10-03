import Logo from "../assets/spotify-logo.png";
import React from "react";

export default function Nav() {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={Logo} alt="logo"></img>
      </div>
      <ul>
        <li className="active">Home</li>
        <li>Search</li>
        <li>Your Library</li>
      </ul>
      <div className="cookies">
        <span>Cookies</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
}
