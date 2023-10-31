/* Navigation code is from material ui: https://mui.com/material-ui/react-bottom-navigation/ */

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: 100}}>

      <BottomNavigation sx={{backgroundColor: "#212025"}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
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

    </Box>
  );
}