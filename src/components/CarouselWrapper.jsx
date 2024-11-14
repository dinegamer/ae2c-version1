import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselWrapper = ({ images }) => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselWrapper;