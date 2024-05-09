import React, { useEffect, useState } from "react";
import './nav.css'
import logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');
  const [showNav, setShowNav] = useState(false);
    const [isSticky, setSticky] = useState(false);

  // handle scroll functrions
  useEffect(() => {
    const handleScroll = () => {
      const offSet = window.scrollY;
      if (offSet > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav className={`container ${isSticky ? " sticky" : ""}`}>
      <a href="#home" className="logo">
        <img src={logo} alt="logo-image" />
      </a>
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