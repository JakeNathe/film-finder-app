import axios from 'axios';
import { useEffect } from "react";
import Chip from '@mui/material/Chip';


const Genres = ({ selectedGenres, setSelectedGenres, genres, setGenres, type, setPage }) => {

    const handleAddGenre = (genre) => {
        // add to currently selected genres
        setSelectedGenres([...selectedGenres, genre]);
        // filter out the genre
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    const handleRemoveGenre = (genre) => {
        // remove from currently selected
        setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
        // add to genres
        setGenres([...genres, genre]);
        setPage(1);
    };

    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        
        setGenres(data.genres);
    };

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres([])
        };
        // stop annoying errors
        // eslint-disable-next-line
    }, [])

    return <div style={{ padding: "8px 8px" }}>
        {selectedGenres && selectedGenres.map((genre) => (
            <Chip 
                label={genre.name}
                style={{ margin: 2}}
                key={genre.id}
                color="primary"
                size="medium"
                clickable 
                onDelete={() => handleRemoveGenre(genre)}
            />
        ))}

        {genres && genres.map((genre) => (
            <Chip 
                label={genre.name}
                style={{ margin: 2, backgroundColor: "white"}}
                key={genre.id}
                size="medium"
                clickable 
                onClick={() => handleAddGenre(genre)}
            />
        ))}
    </div>
};

export default Genres;