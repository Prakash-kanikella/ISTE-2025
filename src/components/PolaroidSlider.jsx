
import React, { useState } from 'react';
import './PolaroidSlider.css';
import arrowl from "../../src/assets/image 22.svg";
import arrowr from "../../src/assets/image 21.svg";

const events = [
  {
    title: 'State Conventions',
    description: 'we have been host to two state-level conventions of ISTE- Drishti in 2017, and Atreya in 2019. An exciting blend of events, workshops, lectures and exhibitions, Atreya witnessed a footfall of over 2.5k people coming together from all over the state. The programme commenced with an inaugural ceremony by our chief guest C R Thomas, the Deputy Director of VSSC-ISRO.',
    image: 'https://via.placeholder.com/538x344.png?text=Event+1',
  },
  {
    title: 'Newton Speaks',
    description: 'Titled after one of the biggest pioneers of science who dared to think outside the box, our monthly webinar series aims at connecting students with people who have achieved wonders in their fields.',
    image: 'https://via.placeholder.com/538x344.png?text=Event+2',
  },
  {
    title: 'JEENIUS',
    description: 'One of our focal events is our hugely successful annual mock exam for engineering aspirants- JEEnius. Modelled after the All India Joint Entrance Examination, this test intends to familiarize students with the question style and paper pattern, and will also help them gauge out their stand in the rankings. In the past, we have conducted JEEnius in various districts in Kerala & Andhra Pradesh.',
    image: 'https://via.placeholder.com/538x344.png?text=Event+3',
  },
  {
    title: 'School Spectrum',
    description: 'Spreading knowledge through fun events is a cherished goal of ours. With a wide range of activities testing oratory talent to technical wiz to managerial skills, Spectrum is the pride of our club as it allows us to reach out to school students and put up activities which help them realize their capabilities and nurture their soft skills.',
    image: 'https://via.placeholder.com/538x344.png?text=Event+4',
  },
  {
    title: 'Online Spectrum',
    description: 'Another hugely successful event is "Online Spectrum", held for the first time in July 2020. Collaborating with ISTE student chapters from other colleges, we conducted an all India level online competition, with various fun challenges ranging from technical skills to creative talents, to keep the quarantine slump at bay. The highlight was "Dream Codex", a 4-round coding event over the span of a week. ',
    image: 'https://via.placeholder.com/538x344.png?text=Event+5',
  },
  {
    title: 'Tech week',
    description: 'Tech Week, conducted alongside other NITC clubs, is a jam-packed 2 day weekend, boasting fun events such as Junkyard Wars (Beat the other teams by building the best machine out of scrap materials!), Admania (Market the most whimsical products!), Tech charades (The type of dumb charades Newton would enjoy!), and so on. It is no doubt one of the biggest events first years eagerly look forward to.',
    image: 'https://via.placeholder.com/538x344.png?text=Event+5',
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