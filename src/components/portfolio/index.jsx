import React, {useState} from "react";

import './style.scss';
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

const projectsData = [
  {
    id: 1,
    name: "My Portfolio Website",
    tags: ["web-app", "mobile-app"],
    path:'https://rohitdev-portfolio.netlify.app/',
    media: {
      thumbnail: require("../../images/portfolio/portfolioimg.png"),
    },
  },
  {
    id: 2,
    name: "Spotmentor Landing Page",
    tags: ["web-page","product"],
    path:'https://www.spotmentor.com/',
    media: {
      thumbnail: require("../../images/portfolio/spotmentor.png"),
    },
  },
  {
    id: 3,
    name: "YouTube Clone",
    tags: ["web-page"],
    path:'https://youtube-clone-developed-by-rohit.netlify.app/',
    media: {
      thumbnail: require("../../images/portfolio/youtube.png"),
    },
  },
  {
    id: 4,
    name: "My Organisation",
    tags: ["web-app"],
    path:'https://galaxysurfactants.test.spotmentor.com/admin/my-organisation',
    media: {
      thumbnail: require("../../images/portfolio/myorg.png"),
    },
  },
  {
    id: 5,
    name: "Ecommerce Website",
    tags: ["web-app", "web-page",'product'],
    path:'https://mini-ecommerce-app-developed-by-rohit.netlify.app/',
    media: {
      thumbnail: require("../../images/portfolio/ecommerce.png"),
    },
  },
  {
    id: 6,
    name: "Todo List",
    tags: ["product", "web-app", "mobile-app"],
    path:'https://todo-app-developed-by-rohit.netlify.app/',
    media: {
      thumbnail: require("../../images/portfolio/todolist.png"),
    },
  },
  {
    id: 7,
    name: "Drumkit",
    tags: ["web-app"],
    path:'https://mini-drumkit-developed-by-rohit.netlify.app/',
    media: {
      thumbnail: require("../../images/portfolio/drumkit.png"),
    },
  },
  {
    id: 8,
    name: "Favourite Tv & show ",
    tags: ["web-app", "web-page"],
    path:'https://rohitshahni.github.io/My_favourite/',
    media: {
      thumbnail: require("../../images/portfolio/tvshow.png"),
    },
  },
]


const Portfolio = () => {

  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false)

  const filterProjects = (tag) => {
    setTransition('zoomOut')

    setTimeout(() => {
      if (tag !== 'all') {
        const filteredProjects = projectsData.filter((f) => f.tags.includes(tag));
        setProjects(filteredProjects);
      } else {
        setProjects(projectsData);
      }
      setTransition('zoomIn')
    }, 200);
    setTimeout(() => {
      setTransition(false);
    }, 600)
  }


  return (
    <Section
      id="portfolio"
      title={'Check my Portfolio'}
      background={'light'}>
      <div className={'portfolio-content-wrapper'}>
        <Filters filterProjects={(tag) => filterProjects(tag)}/>
        <Showcase
          data={projects}
          transition={transition}
        />
      </div>
    </Section>
  )
}
export default Portfolio;
