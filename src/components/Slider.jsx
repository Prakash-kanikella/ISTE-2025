import React from 'react';
import './Slider.css';

function Slider() {
  const images = [
    'pictures/Frame 9.svg',
    '/pictures/Frame 14 .svg',
    '/pictures/Frame 19 .svg'
  ];

  return (
    <div className="slider-container">
      {images.map((src, index) => (
        <div key={index} className="slider-item">
          <img src={src} alt={`Slide ${index + 1}`} className="slider-image" />
        </div>
      ))}
    </div>
  );
}

export default Slider;