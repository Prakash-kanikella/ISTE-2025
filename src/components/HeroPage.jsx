import { useState, useRef } from "react";
import "./HeroPage.css";

function HeroPage() {
  const heroRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  const handleFirstHover = () => {
    if (!animated) {
      heroRef.current.classList.add("animate");
      setAnimated(true);
    }
  };

  return (
    <div className="heropage" ref={heroRef} onMouseEnter={handleFirstHover}>
      <div className="heroinfo">
        <div className="aboutus">
          <h2>About Us</h2>
          <p>
            The Indian Society for Technical Education (ISTE) is a national non-profit
            organization which advocates technical development and personal growth in a
            creative and innovative way. After all, our motto is that growth happens over time,
            not overnight.
          </p>
        </div>

        <div className="ourmission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to improve the interest in technical studies among students.
            We intend to support the flames of innovation and help bright young minds employ
            the gifts of technological advancements to develop innovative ways to teach and to learn.
          </p>
        </div>

        <div className="ourvision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to deliver an experience that will boost creative minds to deal
            with dynamic technology. With a never-say-die spirit, fostering the talent of
            zealous students, and inculcating among them a fondness for technical
            innovativeness, is our ultimate aspiration.
          </p>
        </div>
      </div>
      <div>

        <div className="image-container">
          <img src="/pictures/aboutus.png" alt="Tech event" />
          <img src="/pictures/mission.jpeg" alt="Innovation" />
          <img src="/pictures/vision.jpeg" alt="Students working" />
        </div>

        <div className="bottom-images">
          <img src="/pictures/aboutus.png" alt="Tech event" />
          <img src="/pictures/mission.jpeg" alt="Innovation" />
          <img src="/pictures/vision.jpeg" alt="Students working" />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
