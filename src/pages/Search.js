import { React, useState, useEffect } from "react";
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Tab, Tabs, Button, TextField } from '@mui/material';
import "./Pages.css";
import IndividualContent from '../components/Javascript/IndividualContent';
import Pagination from '../components/Javascript/Pagination';


const darkTheme = createTheme({
  palette: {
      mode: "dark",
  },
});


const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [content, setContent] = useState()
  const [numOfPages, setNumOfPages] = useState()

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(Math.min(100, data.total_pages));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // stop annoying errors
    // eslint-disable-next-line
  }, [type, page]);
  

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
            style = {{ flex: 1 }}
            className="searcBox"
            label="Search"
            variant="filled"
            onChange={ (e) => setSearchText(e.target.value) }
          />
          <Button 
          variant="contained" 
          style={{ marginLeft: 10, backgroundColor: "white" }}
          onClick={fetchSearch}
          >
            <SearchIcon/>
          </Button>
        </div>

        <Tabs 
          value={type} 
          indicatorColor="primary" 
          textColor="white"
          variant="fullWidth"
          style={{ paddingBottom: 1, paddingTop: 5 }}
          onChange={(event, newValue) => {
            setType(newValue);
          }}
        >
          <Tab style={{ width: "50%" }} label="search Movies"/>
          <Tab style={{ width: "50%" }} label="search TV Series"/>
        </Tabs>
      </ThemeProvider>

      <div className="popular">
          {content && content.map((c) => (
          <IndividualContent 
            key={c.id} 
            id={c.id} 
            poster={c.poster_path} 
            title={c.title || c.name} 
            media_type={type ? "tv" : "movie"}
            date={c.first_air_date || c.release_date }
            vote_average={c.vote_average}
          />))}
        {/* why will this not work???? {searchText && !content && (<h2>No Results Found</h2>)} */}
        </div>
        { numOfPages > 1 && (
          <Pagination setPage={setPage} numOfPages={numOfPages}/>
        )}
    </div>
  );
}

export default Search;