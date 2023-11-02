import React from 'react';
import "./Pages.css";
import IndividualContent from '../components/IndividualContent';
import { useState, useEffect } from "react";
import axios from "axios";
import PageNumber from '../components/PageNumber';



const Popular = () => {
  const [page, setPage] = useState(1);  // to return more than 1 page from api request
  const [content, setContent] = useState([]);  // content form api

  const fetchPopular = async () => {
    // fetch and destructure data
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    setContent(data.results);
  };

  useEffect(() => {
    fetchPopular();
  }, [page]);



// return individual movie/tvshow items with relevant data
  return (
    <div>
        <span className="pageTitle">POPULAR NOW</span>
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
        <PageNumber setPage={setPage}/>
    </div>
  )
};

export default Popular;