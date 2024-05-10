
import React, { useEffect, useState } from "react";
import "./nav.css";
import logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [showNav, setShowNav] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offSet = window.scrollY;
      setSticky(offSet > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    setShowNav(!showNav);
  };

  return (
    <nav className={`container ${isSticky ? "sticky" : ""}`}>
      <a href="#home" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <button className="toggler" onClick={() => setShowNav(!showNav)}>
        {showNav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div className={`nav-items ${showNav ? "show" : ""}`}>
        <a
          href="#home"
          onClick={() => handleNavClick("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => handleNavClick("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#experience"
          onClick={() => handleNavClick("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          Skill
        </a>
        <a
          href="#myprojects"
          onClick={() => handleNavClick("#myprojects")}
          className={activeNav === "#myprojects" ? "active" : ""}
        >
          Project
        </a>
        <a
          href="#contacts"
          onClick={() => handleNavClick("#contacts")}
          className={activeNav === "#contacts" ? "active" : "link"}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
