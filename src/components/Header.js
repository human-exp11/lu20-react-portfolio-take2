import React from "react";
import NavTabs from "./NavBar"


function Header({ currentPage, handlePageChange }) {
  return (
<nav className="navbar py-4 navbar-dark bg-dark d-flex justify-content-around">
  <h1>Luca Urbanowicz</h1>
    <NavTabs handlePageChange={handlePageChange} currentPage={currentPage}/>
</nav>
  );
}


export default Header;