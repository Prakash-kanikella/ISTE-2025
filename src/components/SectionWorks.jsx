import React from "react";
import "./SectionWorks.css";
import StateConventions from "../assets/State Conventions.jpg";
import jeenius from "../assets/jeenius.jpg";
import SchoolSpectrum from "../assets/School Spectrum.jpg";
import spectrum from "../assets/spectrum.jpg";
import OnlineSpectrum from "../assets/Online Spectrum.jpg";
import TechWeek from "../assets/Tech Week.jpg";


const eventData = [
  {
    title: "State Conventions",
    img: StateConventions,
    desc: "We have been host to two state-level conventions of ISTE: Drishti in 2017, and Atreya in 2019. An exciting blend of events, workshops, lectures and exhibitions, Atreya witnessed a footfall of over 2.5k people coming together from all over the state. The programme commenced with an inaugural ceremony by our chief guest C R Thomas, the Deputy Director of VSSC-ISRO."
  },
  {
    title: "Newton Speaks",
    img: spectrum,
    desc: "Titled after one of the biggest pioneers of science who dared to think outside the box, our monthly webinar series aims at connecting students with people who have achieved wonders in their fields."
  },
  {
    title: "JEENIUS",
    img: jeenius,
    desc: "One of our focal events is our hugely successful annual mock exam for engineering aspirants – JEEnius. In the past, we’ve conducted JEEnius across various districts in Kerala and AP, and even overseas in Doha. We’ve also collaborated with Tathva, NITC’s tech fest, under the banner 'Zeroth Attempt'."
  },
  {
    title: "School Spectrum",
    img: SchoolSpectrum,
    desc: "Spreading knowledge through fun events is a cherished goal of ours. With a wide range of activities testing oratory talent, technical skills, and managerial acumen, Spectrum is our club’s pride in helping students nurture their capabilities."
  },
  {
    title: "Online Spectrum",
    img: OnlineSpectrum,
    desc: "Held first in July 2020, Online Spectrum was a national-level online competition during quarantine. Highlights include the 4-round coding challenge 'Dream Codex', showcasing our creative and collaborative spirit."
  },
  {
    title: "Tech Week",
    img: TechWeek,
    desc: "Tech Week is a 2-day fest conducted with other NITC clubs featuring events like Junkyard Wars, Admania, and Tech Charades. A hit among first years, it celebrates fun and learning."
  }
];

const SectionWorks = () => {
  return (
    <section className="section-works">
      {eventData.map((event, index) => (
        <div key={index} className="event-card" data-aos="fade-up">
          <div className="event-title-container">
            <h2 className="component_heading">{event.title}</h2>
          </div>
          <div className="event-content">
            <img src={event.img} alt={event.title} />
            <p>{event.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionWorks;
