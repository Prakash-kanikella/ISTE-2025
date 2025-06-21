import React, { useRef } from "react";
import "./Techquila.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "/tequila/pic1.jpg";
import img2 from "/tequila/pic2.jpg";
import img3 from "/tequila/pic3.jpg";
import img4 from "/tequila/pic4.jpg";
import img5 from "/tequila/pic5.png";
import img6 from "/tequila/pic6.png";
import img7 from "/tequila/pic7.jpg";
import img8 from "/tequila/pic8.png";
import img9 from "/tequila/pic9.jpg";
import img10 from "/tequila/pic10.jpg";
import img11 from "/tequila/pic11.png";

const articles = [
  { title: "Sustainability As A Lifestyle", img: img4, url: "https://techquila.istenitc.com/subpages/4" },
  { title: "Can Li-Fi replace Wi-Fi?", img: img5, url: "https://techquila.istenitc.com/subpages/5" },
  { title: "5G And The Phone-y Conspiracies", img: img6, url: "https://techquila.istenitc.com/subpages/6" },
  { title: "The Euphoria of Traveling", img: img7, url: "https://techquila.istenitc.com/subpages/7" },
  { title: "The Deep Web", img: img8, url: "https://techquila.istenitc.com/subpages/8" },
  { title: "The Human Condition", img: img9, url: "https://techquila.istenitc.com/subpages/9" },
  { title: "Telling science stories well", img: img1, url: "https://techquila.istenitc.com/subpages/1" },
  { title: "Can AI help in achieving marketing goals?", img: img2, url: "https://techquila.istenitc.com/subpages/2" },
  { title: "Quantum future", img: img3, url: "https://techquila.istenitc.com/subpages/3" },
  { title: "Quantum Dots", img: img10, url: "https://techquila.istenitc.com/subpages/10" },
  { title: "GTA & its impact", img: img11, url: "https://techquila.istenitc.com/subpages/11" }
];

function Techquila() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: false,
    draggable: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <section className="techquila-carousel">
      <h2 className="component_heading">TECHQUILA</h2>
      <p>Discover a sea of well-curated excerpts on latest technical trends and enigmas of the world!</p>

      <Slider ref={sliderRef} {...settings}>
        {articles.map((item, index) => (
          <div key={index} className="slide-item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </Slider>

      <div className="custom-nav-buttons">
        <button onClick={() => sliderRef.current.slickPrev()}>◀</button>
        <button onClick={() => sliderRef.current.slickNext()}>▶</button>
      </div>
    </section>
  );
}

export default Techquila;
