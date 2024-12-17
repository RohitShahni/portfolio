import React from "react";

import './style.scss';
import Arrow from '../../shared/arrow';

const Showcase = ({data, transition}) => {
  return (
    <div className={'projects-showcase'}>
      {data && data.map((project) => (
        <div
          key={project.name}
          className={`showcase-item 
          ${transition === 'zoomOut'
            ? 'zoomOut'
            : transition === 'zoomIn'
              ? 'zoomIn'
              : ''}`}>
          <div className={'meta-content'}>
            <h3>{project.name}</h3>
            <div className={'go-to-cta'}>
              <span className={'text'}>Projects Details</span>
              <Arrow/>
            </div>
          </div>
          <img src={project.media.thumbnail} alt={'image'}/>
        </div>
      ))}
    </div>
  )
}
export default Showcase;
