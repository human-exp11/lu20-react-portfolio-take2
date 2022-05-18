import React from 'react';
import '../styles/Portfolio.css';
import projectData from '../portdata/projectInfo.json';

function Portfolio({ hoverActive, setHoverActive }) {

  return (
      <div id="portfolio" className="container">

          {projectData.map((element, index) => {
              return (
                  <div key={index} className="portfolio-card" onMouseEnter={() => setHoverActive(index)} onMouseLeave={() => setHoverActive(10)}>
                      <img src={element.imgPath} className="portfolio-img" />
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