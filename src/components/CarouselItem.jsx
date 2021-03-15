import * as React from 'react';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ video }) => (
  <div className='carousel-item'>
    <img src={video.cover} alt={video.title} className='carousel-item__img' />
    <div className='carousel-item__details'>
      <div>
        <img
          src={playIcon}
          alt='Play Icon'
          className='carousel-item__details--img'
        />
        <img
          src={plusIcon}
          alt='Plus Icon'
          className='carousel-item__details--img'
        />
      </div>
      <p className='carousel-item__details--title'>{video.title}</p>
      <p className='carousel-item__details--subtitle'>
        {`${video.year} ${video.contentRating} ${video.duration}`}
      </p>
    </div>
  </div>
);

export default CarouselItem;
