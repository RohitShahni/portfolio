import React, {useState} from 'react';
import './style.scss'
import logo from '../../images/logo.png'
import {CgMenuRight} from "react-icons/cg";
import {IoMdClose} from "react-icons/io";

import rohitdevlogo from '../../images/rohitdev.jpeg'
import CallToAction from "../shared/CallToAction";
import {scrollToSection} from "../utils/helper";

const NavigationBar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  const menuItemClickHandler = (section) => {
    setMobileMenu(!mobileMenu)
    scrollToSection(section)
  }

  return (
    <div className="top-navigation-bar">
      <div className={'app-logo'}>
        <img
          src={rohitdevlogo}
          alt={'rohit developer'}
        />
      </div>
      <div className={'navigation'}>

        <span className={'navigation-item'} onClick={() => {
          menuItemClickHandler('skills')
        }}>Skills</span>

        <span className={'navigation-item'} onClick={() => {
          menuItemClickHandler('portfolio')
        }}>Portfolio</span>

        <span className={'navigation-item'} onClick={() => {
          menuItemClickHandler('blogs')
        }}>Blogs & Articles</span>

        <CallToAction text={'Contact me'}
                      action={() => menuItemClickHandler('contact')}/>

      </div>

    </div>
  )
}

export default NavigationBar;
