/*
Modal code all form material UI - react transition group modal
*/
import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Carousel from './Carousel';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from "axios";
import '../CSS/ContentModal.css';
import {img_size_500, unavailable, unavailableLandscape} from '../../config/config';

const styleModal= {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const stylePaper= {
  width: "70%",
  height: "94%",
  backgroundColor: "#39445a",
  border: "1px solid #ffffff",
  borderRadius: 3,
  color: "white",
  padding: 2
};

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    // set to first result if exisits 
    setVideo(data.results[0]?.key) ;
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // stop annoying errors
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <button type="button" className="content" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        style={{display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {content && (
          <Box className="contentModal" sx={stylePaper}>
            <img 
              className="contentModalPortrait"
              alt={content.name || content.title} // for tv or movie
              src={content.poster_path ? `${img_size_500}/${content.poster_path}` : unavailable}
            />
            <img 
              className="contentModalLandscape"
              alt={content.name || content.title} // for tv or movie
              src={content.backdrop_path ? `${img_size_500}/${content.backdrop_path}` : unavailableLandscape}
            />
            <div className="contentModalAbout">
              <span className="contentModalTitle">
                {content.name || content.title} (
                  {(content.first_air_date || content.release_date || "-----").substring(0, 4)}
                )
              </span>
              {content.tagline && (<i className="contentModalTagline">{content.tagline}</i>)}
              <span className="contentModalDescription">{content.overview}</span>
              <div></div>
              <Button
                varient="contained"
                color="secondary"
                target="__blank"
                href={`https://www.youtube.com/watch?v${video}`}
              >
                Watch Trailer
              </Button>
            </div>
          </Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
}