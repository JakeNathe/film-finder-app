import { React, useState, useEffect } from 'react';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../CSS/Carousel.css'
import { img_size_300, noPicture } from '../../config/config';

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ id, media_type }) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${img_size_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItemImage"
      />
      <b className="carouselItemText">{c?.name}</b>
    </div>
  ));

  const responsiveItems = {
    // change display based on pixels
    0: {
      items: 3,
    },
    512: {
        items: 4,
    },
    1024: {
        items: 6,
    }
  }

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel 
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsiveItems}
      items={items}
    />
  );
}

export default Carousel;