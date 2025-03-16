import "./Footer.css"; 
import { useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="footer" onMouseEnter={() => setIsVisible(true)}>
      
      <div className="address">
        <div className={`iste ${isVisible ? "visible" : ""}`}>
          <h3>I</h3>
          <h3>S</h3>
          <h3>T</h3>
          <h3>E</h3>
        </div>

        <div className={`full-text ${isVisible ? "visible" : ""}`}>
          <h3 className="I">ndian</h3>
          <h3>ociety for</h3>
          <h3>echnical</h3>
          <h3>ducation</h3>
        </div>
      </div>

      <div className={`subscribe ${isVisible ? "visible" : ""}`}>
        <h3>Subscribe To Techquila</h3>
        <button className="subscribe-btn">Subscribe</button>
      </div>

      <div className={`contacts ${isVisible ? "visible" : ""}`}>
        <p>Get in Touch</p>
        <h4>LIKHITH (SECRETARY) : +91 91138 38324</h4>
        <h4>AARON JOSEPH (JOINT SECRETARY) : +91 98954 45593</h4>
        <h4>SAI DATHU (JOINT SECRETARY) : +91 80742 34873</h4>
        <div className="social-icons">
          <a href=""><img src="pictures/twitter.png" alt="Twitter"/></a>
          <a href="https://www.facebook.com/istenitc/"><img src="pictures/facebook.png" alt="Facebook"/></a>
          <a href="https://www.instagram.com/iste_nitc/"><img src="pictures/instagram.png" alt="Instagram"/></a>
          <a href="https://www.youtube.com/@istenitcchapter4641"><img src="pictures/youtube.png" alt="YouTube"/></a>
          <a href="https://www.linkedin.com/company/iste-nitc/"><img src="pictures/linkedin.png" alt="LinkedIn"/></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
