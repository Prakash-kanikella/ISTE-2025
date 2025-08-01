import React, { useState } from 'react';
import './Page_01.css';

function Page_01({ scrollTo, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <div className="background-image">
        <img
          src="/pictures/unsplash_FPSrDsq5i20.svg"
          className="centered-image"
          alt="Unsplash Background"
        />
      </div>

      <div className="nav">
        <div className="nav-left">
          <img src="/pictures/Mask group.svg" alt="Logo" className="logo" />
          <h1 className="iste-text">ISTE</h1>
        </div>

        <div className="nav-links">
          <a
            href="https://www.facebook.com/istenitc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/pictures/facebook 1.svg" alt="Facebook" />
          </a>
          <a
            href="https://x.com/iste_nitc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/pictures/social-media 1.svg" alt="Social Media" />
          </a>
          <a
            href="https://www.youtube.com/@istenitcchapter4641"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/pictures/youtube 1.svg" alt="YouTube" />
          </a>
          <a
            href="https://www.linkedin.com/company/iste-nitc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/pictures/linkedin 1.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/iste_nitc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/pictures/instagram 1.svg" alt="Instagram" />
          </a>
        </div>

        <button className="nav-button" onClick={() => setMenuOpen(true)}>
          <img src="/pictures/Group 55.svg" alt="Menu" />
        </button>
      </div>

      {menuOpen && (
        <div className="fullscreen-menu">
          <button className="close-button" onClick={() => setMenuOpen(false)}>
            ×
          </button>
          <ul className="menu-options">
            <li onClick={() => {scrollTo(refs.galleryRef),setMenuOpen(false)}}>Gallery</li>
            <li onClick={() => {scrollTo(refs.techquilaRef),setMenuOpen(false)}}>Techquila</li>
            <li onClick={() => {scrollTo(refs.eventsRef),setMenuOpen(false)}}>Events</li>
            <li onClick={() => {scrollTo(refs.teamRef),setMenuOpen(false)}}>Team</li>
            <li onClick={() => {scrollTo(refs.aboutusRef),setMenuOpen(false)}}>About Us</li>
            <li onClick={() => {scrollTo(refs.contactRef),setMenuOpen(false)}}>Contact</li>
          </ul>
        </div>
      )}

      <div className="main-content">
        <div className="content-text">
          <h1>Indian Society For<br />Technical Education</h1>
          <p>NIT CALICUT STUDENT'S CHAPTER</p>
          <p className="join-text">Join us in our journey of technical excellence</p>
        </div>
        <div className="video-glow-wrapper">
          <div className="video-circle">
            <div className="scrolling-map">
              <img src="/pictures/globemap.png" alt="Scrolling Globe" />
            </div>
          </div>
        </div>
      </div>

      <img
        src="/pictures/pixelcut-export (17) 2.svg"
        alt="Group"
        className="astronaut"
      />

      <div className="white-section">
        <h2>Welcome to the ISTE Community</h2>
        <p>We are glad to have you here. Explore our events, workshops, and more.</p>
      </div>
    </div>
  );
}

export default Page_01;