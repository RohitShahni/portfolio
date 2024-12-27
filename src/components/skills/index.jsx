import React from "react";

import './style.scss';
import Section from "../shared/section";
import TechIcons from '../../images/tech-icons.png'
import CallToAction from "../shared/CallToAction";
import {AiOutlineCloudDownload} from "react-icons/ai";
import downloadCv from '../../images/Rohit-CV.pdf';

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
                    <p>Proficient in developing responsive and dynamic web applications using React.js, HTML5, CSS3, and JavaScript (ES6+), with expertise in state management tools like Redux and Context API, a strong focus on crafting seamless UI/UX designs, and hands-on experience in version control and collaboration using Git, GitHub, and agile methodologies.
                    </p>
                    <CallToAction
                        text={'Download CV'}
                        icon={<AiOutlineCloudDownload/>}
                        content={downloadCv}
                    />
                </div>
            </div>
        </Section>
    )
}

export default Skills;
