import React from 'react';
import "./Pages.css";
import IndividualContent from '../components/IndividualContent/IndividualContent';
import { useState, useEffect } from "react";
import axios from "axios";



const Popular = () => {

  const [content, setContent] = useState([]);

  const fetchPopular = async () => {
    // fetch and destructure data
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
    console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

// return individual movie/tvshow items with relevant data
  return (
    <div>
        <span className="pageTitle">Popular Now</span>
        <div className="popular">
          {content && content.map((c) => <IndividualContent 
          key={c.id} 
          id={c.id} 
          poster={c.poster_path} 
          title={c.title || c.name} 
          media_type={c.media_type}
          date={c.first_air_date || c.release_date }
          vote_average={c.vote_average}
          />)}
        </div>
    </div>
  )
};

export default Popular;