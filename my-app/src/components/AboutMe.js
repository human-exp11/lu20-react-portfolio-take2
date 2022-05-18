import React from "react";
import '../styles/AboutMe.css';

function AboutMe () {
  return (
    <div id="about-me" className="container">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="./public/assets/me.jpeg"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Luca Urbanowicz"
          />
          <p className= "p-me"  style={{ fontSize: "27px" }}>
        blah blah
          
          <br></br>
           <br></br>
           
           </p>
          </div>
  );
};

export default AboutMe;