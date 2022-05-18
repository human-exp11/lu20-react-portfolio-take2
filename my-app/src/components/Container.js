import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const handlePageChange = (currentPage) => setCurrentPage(currentPage);

  
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    
  if (currentPage === 'Resume') {
    return <Resume />;
  }
  return <Contact />;
  }


  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}