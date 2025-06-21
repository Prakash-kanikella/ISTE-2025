import React from 'react';
import './ScrollingGallery.css';

const leftImages = [
      'pictures/left1.png',
    '/pictures/left2.png',
    '/pictures/left3.png',
    '/pictures/left4.png'
];

const middleImages = [
      'pictures/middle1.png',
    '/pictures/middle2.png',
    '/pictures/middle3.png',
    '/pictures/middle4.png'
];

const rightImages = [
      'pictures/right1.png',
    '/pictures/right2.png',
    '/pictures/right3.png',
    '/pictures/right4.png'
];

const VerticalScroller = () => {
  return (
    <div className="scroller-wrapper">
      <Strap images={leftImages} direction="down" />
      <Strap images={middleImages} direction="up" />
      <Strap images={rightImages} direction="down" />
    </div>
  );
};

const Strap = ({ images, direction }) => (
  <div className="strap">
    <div className={`image-track ${direction === 'up' ? 'forward' : 'reverse'}`}>
      {[...images, ...images].map((img, i) => (
        <img key={i} src={img} alt="" className="scroll-img" />
      ))}
    </div>
  </div>
);

export default VerticalScroller;
