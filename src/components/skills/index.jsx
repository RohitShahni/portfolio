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
          <p>Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has
          </p>
          <CallToAction text={'Download CV'}
                        icon={<AiOutlineCloudDownload/>}/>
        </div>
      </div>
    </Section>
  )
}

export default Skills;
