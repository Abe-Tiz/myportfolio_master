import React from 'react'
import { BsLinkedin, BsTelegram } from "react-icons/bs";
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/abe-ti/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Abe-tiz/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://t.me/abiye1921" target="_blank" rel="noreferrer">
        <BsTelegram />
      </a>
    </div>
  );
}

export default HeaderSocials