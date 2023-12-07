import { React, useState, useEffect } from "react";
import axios from 'axios';
import "./Pages.css";
import IndividualContent from '../components/IndividualContent';
import Pagination from '../components/Pagination';
import Genres from '../components/Genres';
import useGenres from '../hooks/useGenres';


const Movies = () => {
  const [page, setPage] = useState(1);  // to return more than 1 page from api request
  const [content, setContent] = useState([]);  // movie cont
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreCodes = useGenres(selectedGenres);


  const fetchMovies = async () => {
    // fetch and destructure data
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genreCodes}`);
    setContent(data.results);
    setNumOfPages(Math.min(100, data.total_pages));
  };

  useEffect(() => {
    fetchMovies();
    // stop annoying errors
    // eslint-disable-next-line
  }, [page, genreCodes]);


  return (
    <div>
        <span className="pageTitle">MOVIES</span>
        <Genres
          type="movie"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
        <div className="movies">
          {content && content.map((c) => 
          <IndividualContent 
            key={c.id} 
            id={c.id} 
            poster={c.poster_path} 
            title={c.title} 
            media_type="movie"
            date={c.release_date}
            vote_average={c.vote_average}
          />)}
        </div>
        <Pagination setPage={setPage} numOfPages={numOfPages}/>
    </div>
  );
};

export default Movies;