import React from "react";

import './style.scss';
import Section from "../shared/section";
import Logo from '../../images/logo.png';
// import rohitLogo from '../../images/rohitdev.jpeg'
import rohitLogo from '../../images/rohitdev3.png'
import SocialIcon from "./social-icon";

import {
  FaYoutube,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaStackOverflow,
} from 'react-icons/fa';

import {scrollToSection} from '../utils/helper';

const Footer = () => {

  return (
    <Section background={'dark'}
             className={'footer'}>
      <div className={'footer-content-wrapper'}>
        <div className={'footer-logo'}>
          <img src={rohitLogo} alt={'Rohit dev'}/>
        </div>
        <ul className={'footer-menu-items'}>
          <li className={'footer-menu-item'}
              onClick={() => {
                scrollToSection('skills')
              }}>
            Skills
          </li>


          <li className={'footer-menu-item'}
              onClick={() => {
                scrollToSection('portfolio')
              }}>
            Portfolio
          </li>

          <li className={'footer-menu-item'}
              onClick={() => {
                scrollToSection('blogs')
              }}>
            Blog & Articles
          </li>

          <li className={'footer-menu-item'}
              onClick={() => {
                scrollToSection('contact')
              }}>
            Contact me
          </li>
        </ul>

        <div className={'social-icons'}>
          <SocialIcon
            color={'#FF0000'}
            icon={<FaYoutube/>}
            link={'https://www.youtube.com'}
          />

          <SocialIcon color={'#0D2636'}
                      icon={<FaGithub/>}
                      link={'https://github.com/RohitShahni?tab=repositories&q=&type=&language=&sort='}
          />
          <SocialIcon
            color={'#0A66C2'}
            icon={<FaLinkedin/>}
            link={'https://www.linkedin.com/in/rohit-kumar-4a7a14201/'}
          />
          <SocialIcon
            color={'#E84C88'}
            icon={<FaInstagram/>}
            link={'https://www.instagram.com/rohitshahni/'}/>

          <SocialIcon
            color={'#0A66C2'}
            icon={<FaTwitter/>}
            link={'https://x.com/TheInte17546666'}/>

        </div>

        <div className={'bottom-bar'}>
          <div className={'copyright-text'}>
            Copyright 2022 Rohit Dev | all Rights Reserved
          </div>
        </div>

      </div>

    </Section>
  )
}

export default Footer;
