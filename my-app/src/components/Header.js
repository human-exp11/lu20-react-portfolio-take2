import React from "react";
import "../styles/Header.css";
import image from "../assets/headerPic.jpg"

function Header({ currentPage, changeFunction }) {
  return (
    <div className="header row" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
    <h1 className=" col-4">
      Luca Urbanowicz
    </h1>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a 
        onClick={() => changeFunction("AboutMe")}
        className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >About Me </a >
      </li>

      <li class="nav-item">
      <a 
        onClick={() => changeFunction("Portfolio")}
        className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >Portfolio </a>
        </li>

      <li class="nav-item">
      <a 
        onClick={() => changeFunction("Resume")}
        className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >Resume </a>
        </li>

      <li class="nav-item">
      <a 
        onClick={() => changeFunction("Contact")}
        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >Contact </a>
        </li>

    </ul>
    </div>
  );
}

export default Header;
