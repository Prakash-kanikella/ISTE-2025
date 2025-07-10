import "./TeamHeads.css";
import { useState } from "react";

const teamMembers = [
  {
    image: "TeamHead1.jpg",
    designation: "GEN SEC",
    name: "NIKITA NAYANIKA",
  },
  {
    image: "TeamHead2.png",
    designation: "JOINT SEC",
    name: "SAHIL PRUSTY",
  },
  {
    image: "TeamHead3.png",
    designation: "JOINT SEC",
    name: "VEDA MOKSHAJNA",
  },
  {
    image: "TeamHead4.jpeg",
    designation: "TREASURER",
    name: "UTSAV KAUSHAL",
  },
  {
    image: "TeamHead5.jpeg",
    designation: "EXTERNAL AFFAIRS SEC",
    name: "AJAY DURGA",
  },
  {
    image: "TeamHead6.jpeg",
    designation: "TECH HEAD",
    name: "PRAKASH KANIKELLA",
  },
  {
    image: "TeamHead7.jpeg",
    designation: "TREASURER",
    name: "JATIN GOYAL",
  },
  {
    image: "TeamHead9.jpeg",
    designation: "DESIGN AND MEDIA HEAD",
    name: "BHUKYA AKASH",
  },
  {
    image: "TeamHead8.png",
    designation: "EXTERNAL AFFAIRS",
    name: "ANURAG KUMAR",
  },
  {
    image: "TeamHead10.jpeg",
    designation: "DESIGN AND MEDIA HEAD",
    name: "LAKSHMI YASHWANTH",
  },,
];

const TeamHeads = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;

  const handleNext = () => {
    if (startIndex + visibleCount < teamMembers.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  return (
    <div className="meetourteam">
      <h2 className="component_heading">MEET OUR TEAM</h2>
      <div className="grid-container">
        {teamMembers.slice(startIndex, startIndex + visibleCount).map((member, index) => (
          <div className="grid-item" key={index}>
            <img
              className="profileimg"
              src={`pictures/${member.image}`}
              alt={`Team Member ${index + 1}`}
            />
            <div className="hidden-text">
              <h2>{member.designation}</h2>
              <h3>{member.name}</h3>
              <div className="social-icons">
                <a href="#"><img src="pictures/facebook 1.svg" alt="" /></a>
                <a href="#"><img src="pictures/linkedin 1.svg" alt="" /></a>
                <a href="#"><img src="pictures/instagram 1.svg" alt="" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        <button onClick={handlePrev} disabled={startIndex === 0}>◀</button>
        <button onClick={handleNext} disabled={startIndex + visibleCount >= teamMembers.length}>▶</button>
      </div>
    </div>
  );
};

export default TeamHeads;
