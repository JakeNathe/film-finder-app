import { React, useState, useEffect } from "react";
import axios from 'axios';
import "./Pages.css";
import IndividualContent from '../components/Javascript/IndividualContent';
import Pagination from '../components/Javascript/Pagination';
import Genres from '../components/Javascript/Genres';
import useGenres from '../hooks/useGenres';


const Series = () => {
  const [page, setPage] = useState(1);  // to return more than 1 page from api request
  const [content, setContent] = useState([]);  // movie cont
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreCodes = useGenres(selectedGenres);


  const fetchSeries = async () => {
    // fetch and destructure data
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genreCodes}`
    );
    // &with_genres=${genre}
    setContent(data.results);
    setNumOfPages(Math.min(100, data.total_pages));
  };

  useEffect(() => {
    fetchSeries();
    // stop annoying errors
    // eslint-disable-next-line
  }, [page, genreCodes]);


  return (
    <div>
      <span className="pageTitle">TV SERIES</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="series">
        {content && content.map((c) => 
        <IndividualContent 
          key={c.id} 
          id={c.id} 
          poster={c.poster_path} 
          title={c.name} 
          media_type="tv"
          date={c.first_air_date}
          vote_average={c.vote_average}
        />)}
      </div>
      <Pagination setPage={setPage} numOfPages={numOfPages}/>
    </div>
  );
};

export default Series;