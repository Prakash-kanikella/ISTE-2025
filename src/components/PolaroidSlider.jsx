
import React, { useState } from 'react';
import './PolaroidSlider.css';
import arrowl from "../../src/assets/image 22.svg";
import arrowr from "../../src/assets/image 21.svg";

const events = [
  {
    title: 'INNOVATHON',
    description: 'Join ISTE\'s flagship hackathon where creativity meets code. Open to all skill levels—perfect for beginners and pros alike. Build innovative solutions, learn new tech, and win big. Fuel your passion and compete for glory in tech!',
    image: '/events/Event1.png',
  },
  {
    title: 'Elocution Competition – National Youth Day',
    description: 'Celebrate Swami Vivekananda’s vision for Vikasit Bharat 2047. Express your ideas with passion, clarity, and conviction. Top speakers will shine in the grand finale. Unleash the power of your voice and inspire the nation!',
    image: '/events/Event2.png',
  },
  {
    title: 'Impreza – Creative Fest',
    description: 'Step into Impreza for a day full of fun and challenges. From photography and open mics to trivia and puzzles, there’s something for all. Get your creative juices flowing in this dynamic fest. Snap, sing, solve, and shine your way through the excitement!',
    image: '/events/Event3.png',
  },
  {
    title: 'Infinity and Beyond – Design Workshop & Competition',
    description: 'Unleash your design potential in this creative double feature. Master Photoshop in our hands-on workshop guided by experts. Showcase your skills in the poster competition judged by ISRO. Perfect for both budding artists and seasoned designers.',
    image: '/events/Event4.png',
  },
  {
    title: 'Valentine’s Day Celebration – With Anuragam',
    description: 'Celebrate love, laughter, and friendship with us this Valentine’s. Fun-filled moments await under the stars with delightful activities. An evening of youthful energy and joyful connections. Let love bloom in the most playful and heartfelt way!',
    image: '/events/Event5.png',
  },
];



function PolaroidSlider() {
  const [current, setCurrent] = useState(2);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % events.length);
  };

  const leftIndex = (current - 1 + events.length) % events.length;
  const rightIndex = (current + 1) % events.length;

  return (
    <div className='poloroid_container'>
      <h2 className="component_heading">EVENTS</h2>
      <div className="slider-container">
        <button className="arrow left" onClick={prevSlide}><img src={arrowl} alt={'◀'} /></button>
        <div className="slider">
          {events.map((event, index) => {
            let className = "slide";
            if (index === current) className += " slide-center";
            else if (index === leftIndex) className += " slide-left";
            else if (index === rightIndex) className += " slide-right";
            else className += " slide-hidden";

            return (
              <div className={className} key={index}>
                <div className="polaroid-card">
                  <img src={event.image} alt="" className="card-img" />
                  <div className="card-text">
                    <div className="card-title">{event.title}</div>
                    <hr className="card-line" />
                    <p className="card-description">{event.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="arrow right" onClick={nextSlide}><img src={arrowr} alt={'▶'} /></button>
      </div>
    </div>
  );
}

export default PolaroidSlider;