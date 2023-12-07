import React from 'react';
import { img_size_300, unavailable} from '../config/config';
import "./IndividualContent.css";
// import { Badge } from "@mui/material";


// break up returned items to invidual movie/show
const IndividualContent = ({id, poster, title, media_type, date}) => {
  return (
    <div className="content">
      {/* unable to make clear it is a rating being displayed. need to find better icon/new idea later */}
      {/* <Badge className="badge" badgeContent={vote_average} color={vote_average > 7.0? "primary" : "secondary"}/> */}
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