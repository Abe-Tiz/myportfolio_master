import React from 'react'
import './about.css'
import myImage from '../../assets/me-image.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

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
              <h5>Current CGPA</h5>
              <small>3.63</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>System Analysis and Development, </li>
                  <li>Web Development</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I am a <b>Mern Stack Developer</b> with expertise in a diverse range
            of programming languages and tools. I ensure seamless integration
            from backend to frontend. My excellent communication skills are
            well-known,facilitating effective team collaboration and project
            success. I am eager to apply my systematic and detail-oriented
            approach to new challenges.With hands-on experience gained from
            internships Addis Ababa University’s Digital Library,Prodigy InfoTech  and FinServ Technology Solution , I bring practicalknowledge to the
            table. As an avid reader and tech enthusiast, I am constantly
            exploring new advancements in programming, I am eager to contribute to and
            grow with your team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About