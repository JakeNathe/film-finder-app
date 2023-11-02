import React from 'react';
import { img_size_300, unavailable} from '../../config/config';
import "./IndividualContent.css";

// break up returned items to invidual movie/show

const IndividualContent = ({id, poster, title, media_type, date, vote_average}) => {
  return (
    <div className="media">
      <img className="poster" src={ poster? `${img_size_300}/${poster}` : unavailable} alt={title}/>
      <b className="title">{title}</b>
      <span className="subtitle">
        {media_type === "tv"? "TV Series" : "Movie"}
        <span className="subtitle">{date}</span>
      </span>
    </div>
  )
};

export default IndividualContent;