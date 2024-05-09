import React from 'react'
import './myprojects.css'
import Data from './data';

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {Data.map((data) => (
          <article className="portfolio__item">
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
      </div>
    </section>
  );
}

export default Myprojects