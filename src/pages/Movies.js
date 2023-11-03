import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import "./Pages.css";
import IndividualContent from '../components/IndividualContent';
import PageNumber from '../components/PageNumber';



const Movies = () => {


  
  const [page, setPage] = useState(1);  // to return more than 1 page from api request
  const [content, setContent] = useState([]);  // movie cont

  const fetchMovies = async () => {
    // fetch and destructure data
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}`);
    // &with_genres=${genre}
    setContent(data.results);
  };

  useEffect(() => {
    fetchMovies();
    // stop annoying errors
    // eslint-disable-next-line
  }, [page]);


  return (
    <div>
        <span className="pageTitle">MOVIES</span>
        <div className="movies">
          {content && content.map((c) => 
          <IndividualContent 
          key={c.id} 
          id={c.id} 
          poster={c.poster_path} 
          title={c.title} 
          media_type={c.media_type}
          date={c.release_date}
          vote_average={c.vote_average}
          />)}
        </div>
        <PageNumber setPage={setPage}/>
    </div>
  );
};

export default Movies;