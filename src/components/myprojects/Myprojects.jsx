import React from 'react'
import './myprojects.css'
import IMG1 from "../../assets/blog_img.jpg";
import IMG2 from "../../assets/product_img.jpg";
import IMG3 from "../../assets/pro-1.PNG";
import IMG4 from "../../assets/weather_img.PNG";
import IMG5 from "../../assets/resweb2.PNG";
import IMG6 from "../../assets/news_img.PNG";
import IMG7 from "../../assets/chat_img.jpg";
import IMG8 from "../../assets/login_regiter.PNG";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Blog website</h3>
          <small className="text-light">
            HTML | EJS | express | CSS | MongoDb{" "}
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abe-Tiz/Blog-website"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>product managment</h3>
          <small className="text-light">
            React | Node js | express js | SQL{" "}
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abe-Tiz/yenettaPM2"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>Authentication</h3>
          <small className="text-light">
            MongoDb | Express | React | Node js
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abe-Tiz/login_registration-mern"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Weather App</h3>
          <small className="text-light">ReactJs</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abe-Tiz/PRODIGY_WD_05"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://wezerapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Todo App</h3>
          <small className="text-light">React</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Thakshila-Bandara/my-resume"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://abiyetodoapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Responsive Website</h3>
          <small className="text-light">React</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abe-Tiz/react_responsive_website"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://abeweb.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Mern Stack Food Delivery</h3>
          <small className="text-light">
            MongoDb | Express | React | NodeJs
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abe-Tiz/food_deliver"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>

        {/* mobile app */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>News App</h3>
          <small className="text-light">React Native</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abe-Tiz/News-App"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>chat app</h3>
          <small className="text-light">React Native</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abe-Tiz/chat_app"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Myprojects