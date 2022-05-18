import React, {useState} from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/Container";
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {

  const [currentPage, setCurrentPage] = useState('AboutMe');

// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
const renderPage = () => {
  if (currentPage === 'About') {
    return <AboutMe />;
  }
  if (currentPage === 'Portfolio') {
    return <Portfolio />;
  }
  if (currentPage === 'Contact') {
    return <Contact />;
  }
  return <Resume />;
};

const handlePageChange = (page) => setCurrentPage(page);


  return <div>
  <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
  <PortfolioContainer renderPage={renderPage} />
  <Footer />

  </div>


}

export default App;
