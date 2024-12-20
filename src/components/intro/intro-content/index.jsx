import React from "react";
import './style.scss'
import hand from '../../../../src/images/hand.png'
import rohitImg from '../../../../src/images/rohitImg.jpeg'
import backgroundlogo from '../../../images/backgroundlogo.png';
import girl from '../../../../src/images/girl.png'
import CallToAction from "../../shared/CallToAction";
import callToAction from "../../shared/CallToAction";
import {BsAwardFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";
import {scrollToSection} from "../../utils/helper";

const IntroContent = () => {
  return (
    <div className={'intro-content'}>
      <div className={'layout'}>
        <div className={'left-col'}>
          <h1 className={'title'}>
            <span className={'small-text'}>
              <span className={'text'}>hello</span>
              <span className={'icon'}>
                <img src={hand} alt="hand"/>
              </span>
              <span className={'text'}>,I Am</span>
            </span>
            <span className={'big-text'}>Rohit Dev </span>
          </h1>
          <p>Dedicated Frontend Developer with a proven track record of
            creating visually stunning and highly functional web applications.
            Bringing 3 years of experience in web development and a strong
            command of React, Redux, HTML, and CSS to deliver responsive
            and user-centric designs.</p>
          <CallToAction text={'Contact me'} action={() => {
            scrollToSection('contact')
          }}/>
        </div>
        <div className={'right-col'}>
          <img src={backgroundlogo} alt="rohit image"/>

          <div className={'highlights horizontal'}>
            <div className={'icon'}>
              <BsAwardFill/>
            </div>
            <div className={'text'}>Best design Award</div>
          </div>

          <div className={'highlights vertical'}>
            <div className={'icon'}>
              <FaUser/>
            </div>
            <div className={'text'}>
              <span>4K+</span>
              Happy Customers
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default IntroContent;
