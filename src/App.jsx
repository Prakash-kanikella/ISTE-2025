import React, { useEffect, useState, useRef } from 'react';
import LoadingPage from './components/LoadingPage';
import Page01 from './components/Page_01';
import styles from './App.module.css';
import './index.css';
import Footer from './components/Footer';
import HeroPage from './components/HeroPage';
import TeamHeads from './components/TeamHeads';
import EventCard from './components/PolaroidSlider';
import ScrollingGallery from './components/ScrollingGallery';
import Contact from './components/Contact';
import Techquila from './components/Techquila';
import SectionWorks from './components/SectionWorks';

function App() {
  const [showPage01, setShowPage01] = useState(false);

  const heroRef = useRef();
  const galleryRef = useRef();
  const techquilaRef = useRef();
  const eventsRef = useRef();
  const teamRef = useRef();
  const aboutusRef = useRef();
  const contactRef = useRef();

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > window.innerHeight * 0.2) {
        setShowPage01(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showPage01) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showPage01]);

  return (
    <>
      {showPage01 ? (
        <div>
          <Page01
            scrollTo={scrollTo}
            refs={{
              heroRef,
              galleryRef,
              techquilaRef,
              eventsRef,
              teamRef,
              aboutusRef,
              contactRef,
            }}
          />

          <div ref={aboutusRef} className={styles.heroPage}>
            <HeroPage />
          </div>

          <div ref={galleryRef} className={styles.slider}>
            <ScrollingGallery />
          </div>

          <div ref={techquilaRef} className={styles.heroPage}>
            <Techquila />
          </div>

          <div ref={eventsRef} className={styles.slider}>
            <EventCard />
          </div>

          <div ref={eventsRef} className={styles.slider}>
            <SectionWorks />
          </div>

          <div ref={teamRef} className={styles.teamHeads}>
            <TeamHeads />
          </div>

          <div ref={contactRef} className={styles.teamHeads}>
            <Contact />
          </div>

          <Footer />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;
