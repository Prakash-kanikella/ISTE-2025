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
    desc: "One of our focal events is our hugely successful annual mock exam for engineering aspirants- JEEnius. Modelled after the All India Joint Entrance Examination, this test intends to familiarize students with the question style and paper pattern, and will also help them gauge out their stand in the rankings. In the past, we have conducted JEEnius in various districts in Kerala & Andhra Pradesh. Last year, we took JEEnius beyond the shores of India and conducted it in Doha, Qatar. We’ve also collaborated with Tathva, the annual techno-management fest of NIT Calicut, to conduct JEEnius under the banner “Zeroth Attempt”."
  },
  {
    title: "School Spectrum",
    img: SchoolSpectrum,
    desc: "Spreading knowledge through fun events is a cherished goal of ours. With a wide range of activities testing oratory talent to technical wiz to managerial skills, Spectrum is the pride of our club as it allows us to reach out to school students and put up activities which help them realize their capabilities and nurture their soft skills."
  },
  {
    title: "Online Spectrum",
    img: OnlineSpectrum,
    desc: "Another hugely successful event is 'Online Spectrum', held for the first time in July 2020. Collaborating with ISTE student chapters from other colleges, we conducted an all India level online competition, with various fun challenges ranging from technical skills to creative talents, to keep the quarantine slump at bay. The highlight was 'Dream Codex', a 4-round coding event over the span of a week. The event is a testament to our core qualities of teamwork and creativity."
  },
  {
    title: "Tech Week",
    img: TechWeek,
    desc: "Tech Week, conducted alongside other NITC clubs, is a jam-packed 2 day weekend, boasting fun events such as Junkyard Wars (Beat the other teams by building the best machine out of scrap materials!), Admania (Market the most whimsical products!), Tech charades (The type of dumb charades Newton would enjoy!), and so on. It is no doubt one of the biggest events first years eagerly look forward to."
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
