import React, { useEffect, useState } from 'react';
import LoadingPage from './components/LoadingPage';
import Page01 from './components/Page_01';
import styles from './App.module.css'; // Ensure the correct import path
import './index.css';
import Footer from './components/Footer';
import HeroPage from './components/HeroPage';
import TeamHeads from './components/TeamHeads';
import Slider from './components/Slider';

function App() {
  const [showPage01, setShowPage01] = useState(false);

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

  return (
    <>
      {showPage01 ? (
        <div>
          <Page01 />
          <div className={styles.heroPage}>
            <HeroPage />
          </div>
          <div className={styles.slider}>
            {/* <Slider /> */}
          </div>
          <div className={styles.teamHeads}>
            <TeamHeads />
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
