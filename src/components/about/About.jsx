import React from 'react'
import './about.css'
import myImage from '../../assets/me-image.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar, BsFillPatchCheckFill} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'
// import { BsFillPatchCheckFill } from 'react-icons/bs';


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                Bsc. in Information System. <br />
                <i>Addis Ababa University.</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5> Projects</h5>
              <small>12+</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>
                    <BsFillPatchCheckFill className="experience__details-icon" />{" "}
                    System Analysis and Development ,{" "}
                  </li>
                  <li>
                    <BsFillPatchCheckFill className="experience__details-icon" />{" "}
                    Web Development
                    <span
                      style={{
                        color: "var(--color-primary)",
                        fontWeight: "bold",
                      }}
                    >
                      ( Frontend || MERN Stack)
                    </span>
                  </li>
                  <li>
                    <BsFillPatchCheckFill className="experience__details-icon" />{" "}
                    Mobile App Development{" "}
                    <span
                      style={{
                        color: "var(--color-primary)",
                        fontWeight: "bold",
                      }}
                    >
                      ( React Native )
                    </span>{" "}
                  </li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            Hello! I'm a frontend developer with internship experience. I
            specialize in HTML, CSS, and JavaScript, and have worked on various
            projects, including e-commerce websites, systems, and portfolios.
            I'm skilled in responsive web development, mobile app development,
            and system analysis. I'm also proficient in frontend frameworks like
            React.
          </p>
          <p>
            In addition, I have experience with the MERN stack, which includes
            Express.js, Node.js, React and MongoDB. I've used these technologies to
            build full-stack applications and understand how they work with
            frontend frameworks like React.
          </p>
          <p>
            I have practical knowledge gained from internships at Addis Ababa
            University’s Digital Library, Prodigy InfoTech, and FinServ
            Technology Solution. I'm always keeping up with the latest
            advancements in programming and eager to contribute and grow with
            your team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About