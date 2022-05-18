import React from "react";
import '../styles/AboutMe.css';

function AboutMe () {
  return (
    <div id="about-me" className="container">
      <br></br>
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="../assets/me.jpeg"
            class="float-left pr-4 pb-3 img-fluid"
            alt="LucaUrbanowicz"
          />
          <p className= "p-me"  style={{ fontSize: "20px" }}>
        My name is Luca and I currently reside in Denver, CO. I have been a pediatric nurse for over 8 years and I currently work at The Children's Hosptial of Colorado. 
        <br></br>
         I recently  made the decision to immerse myself in something that I have always been passionate about: web development. 
        <br></br> 
        I will receive my certificate from The University of Denver's Full-Stack Bootcamp in June of 2022. I am excited to begin this new chapter!
          
          <br></br>
           <br></br>
      
           </p>
          </div>

    
  );
};

export default AboutMe;