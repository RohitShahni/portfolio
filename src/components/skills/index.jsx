import React from "react";

import './style.scss';
import Section from "../shared/section";
import TechIcons from '../../images/tech-icons.png'
import CallToAction from "../shared/CallToAction";
import {AiOutlineCloudDownload} from "react-icons/ai";

const Skills = () => {
  return (
    <Section
      background="dark"
      id={"skills"}>
      <div className={'skills-content-wrapper'}>
        <div className={'left-col'}>
          <img
            src={TechIcons}
            about={'JS,React,HTML,CSS,JavaScript,Node.js'}
          />
        </div>
        <div className={'right-col'}>
          <h2>Skills</h2>
          <p>Dedicated Frontend Developer with a proven track record of
            creating visually stunning and highly functional web applications.
            Bringing 3 years of experience in web development and a strong
            command of React, Redux, HTML, and CSS to deliver responsive
            and user-centric designs.
          </p>
          <CallToAction
            text={'Download CV'}
                        icon={<AiOutlineCloudDownload/>}/>
        </div>
      </div>
    </Section>
  )
}

export default Skills;
