import React from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});


const PageNumber = ({ setPage }) => {

    const changePage = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

// cannot make 100% width....
  return (
    <div>
        <Box sx={{width: "100%", justifyContent:"center", display:"flex"}}>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Pagination
                color="primary" 
                varient="outlined"
                shape="rounded"
                count={10} 
                hideNextButton // not set up to work
                hidePrevButton 
                onChange={(e) => changePage(e.target.textContent)}/>
        </ThemeProvider>
        </Box>
    </div>
  );
};

export default PageNumber;