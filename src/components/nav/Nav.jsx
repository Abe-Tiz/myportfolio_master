import React from 'react'
import './nav.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');
  const [showNav, setShowNav] = useState(false);
  
  return (
    <nav className="container">
      <div className="logo">Logo</div>
      <button className="toggler" onClick={() => setShowNav(!showNav)}>
        {showNav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div className={`nav-items ${showNav ? "show" : ""}`}>
        {" "}
        <a
          href="#home"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          Experience
        </a>
        <a
          href="#myprojects"
          onClick={() => setActiveNav("#myprojects")}
          className={activeNav === "#myprojects" ? "active" : ""}
        >
          Project
        </a>
        <a
          href="#contacts"
          onClick={() => setActiveNav("#contacts")}
          className={activeNav === "#contacts" ? "active" : "link"}
        >
          Contact
        </a>
      </div>
      <div></div>
    </nav>
  );
}

export default Nav