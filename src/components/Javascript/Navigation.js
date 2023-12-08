import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
      mode: "dark",
  },
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline/>

        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>

          <BottomNavigationAction 
          sx={{color: "white"}}
          label="Popular Now" 
          icon={<TrendingUpIcon />} 
          />
          <BottomNavigationAction 
          sx={{color: "white"}}
          label="Movies" 
          icon={<MovieIcon />} 
          />
          <BottomNavigationAction 
          sx={{color: "white"}}
          label="TV Series" 
          icon={<LiveTvIcon />} 
          />
          <BottomNavigationAction 
          sx={{color: "white"}}
          label="Search" 
          icon={<SearchIcon />} 
          />
        </BottomNavigation>

      </ThemeProvider>
    </Box>
  );
}