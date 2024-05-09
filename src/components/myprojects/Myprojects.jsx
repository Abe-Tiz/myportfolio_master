import React, { useState } from "react";
import "./myprojects.css";
import Data from "./data";

const Myprojects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {Data.slice(0, showAllProjects ? Data.length : 3).map((data,index) => (
          <article
            key={index}
            className={`portfolio__item ${index >= 3 ? "fade-in" : ""}`}
          >
            <div className="portfolio__item-image">
              <img src={data.image} alt="" />
            </div>
            <h3>{data.title}</h3>
            <small className="text-light">{data.tech}</small>
            <div className="portfolio__item-cta">
              <a
                href={data.source}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                {data.btnName}
              </a>
              {data.link && (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  {data.linkName}
                </a>
              )}
            </div>
          </article>
        ))}
        {Data.length > 3 && (
          <a onClick={toggleProjects} className="btn project__more">
            {showAllProjects ? "Show Less" : "Show More"}
          </a>
        )}
      </div>
    </section>
  );
};

export default Myprojects;
