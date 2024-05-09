import React from 'react'
import './footer.css'
import logo from "../../assets/logo.png";
import {BsLinkedin, BsTelegram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <img src={logo} alt="logo-image" />
      </a>
      {/* <a href="#home" className="logo"></a> */}
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">My Skills</a>
        </li>
        <li>
          <a href="#myprojects">My Projects</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/abe-ti/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Abe-tiz/">
          <BsGithub />
        </a>
        <a href="https://t.me/abiye1921">
          <BsTelegram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()} , Abebe Tizazu. All rightts
          reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer