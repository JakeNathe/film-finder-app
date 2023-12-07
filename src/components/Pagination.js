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


const Pagenation = ({ setPage, numOfPages = 20 }) => {

    const changePage = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

// cannot make 100% width....
  return (
    <div>
        <Box sx={{width: "100%", justifyContent:"center", display:"flex", paddingTop: 1.5 }}>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Pagination
                color="primary" 
                varient="outlined"
                shape="rounded"
                count= {numOfPages}
                hideNextButton // not set up to work
                hidePrevButton 
                onChange={(e) => changePage(e.target.textContent)}/>
        </ThemeProvider>
        </Box>
    </div>
  );
};

export default Pagenation;