import React from 'react';
import cloud from '../../images/cloud.png';
import cloudSoft from '../../images/cloud-soft.png';
import NavigationBar from "../navigation-bar";

import './style.scss'

const Intro = () => {
  return (
    <div className={'intro-section'}>
      <div className={'vector-bg'} id={'parallax'}>
      </div>

      <img src={cloud} className={'cloud'}/>
      <img src={cloudSoft} className={'cloud-soft'}/>

      <div className={'content'}>
        <NavigationBar/>
      </div>
    </div>
  )
}
export default Intro;
