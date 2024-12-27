import React from "react";

import './style.scss';
import Arrow from "../../shared/arrow";

const BlogCard = ({user, date, image, title, description,path=''}) => {
  return (
    <div className="blog-card">
      <div className={'image-section'}>
        <img
          src={image}
          alt={title}/>
      </div>
        <div className={'content-section'}>
            <div className={'info-bar'}>
                <div className={'user-name'}>By {user}</div>
                <div className={'posted-date'}>{date}</div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            {path ? (
                <a href={path} target="_blank" rel="noopener noreferrer">

                    <div className={'readmore-cta'}>
                        <span className={'text'}>Read more</span>
                        <Arrow/>
                    </div>
                </a>
            ): (

                <div className={'readmore-cta'}>
                    <span className={'text'}>Read more</span>
                    <Arrow/>
                </div>
            )}
        </div>
    </div>
  )
}
export default BlogCard;
