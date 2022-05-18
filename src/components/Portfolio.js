import React from 'react';
import '../styles/Portfolio.css';
import cardInfo from '../portdata/cardInfo.json';

function Portfolio({ hoverActive, setHoverActive }) {

  return (
      <div id="portfolio" className="container">

          {cardInfo.map((element, index) => {
              return (
                  <div key={index} className="portfolio-card" onMouseEnter={() => setHoverActive(index)} onMouseLeave={() => setHoverActive(10)}>
                      <img src={element.imgPath} className="portfolio-img" alt="port"/>
                      <div className="portfolio-title">
                          <a className={hoverActive === index ? "deployed-link hover-active" : "deployed-link"} href={element.deployedPath}>
                              {element.title}
                          </a>
                          <a className={hoverActive === index ? "github-icon bi bi-github hover-active" : "github-icon bi bi-github"} href={element.githubPath}></a>
                      </div>
                  </div>
              )
          })}
      </div >
  );
}

export default Portfolio;