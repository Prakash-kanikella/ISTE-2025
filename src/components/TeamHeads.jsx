import "./TeamHeads.css";
import { useState } from "react";

const teamMembers = [
  "TeamHead1.jpeg",
  "TeamHead2.jpeg",
  "TeamHead3.jpeg",
  "TeamHead4.jpeg",
  "TeamHead5.jpeg",
  "TeamHead6.jpeg",
  "TeamHead5.jpeg",
  "TeamHead5.jpeg",
  "TeamHead5.jpeg",
  "TeamHead5.jpeg",
  "TeamHead5.jpeg",
  "TeamHead5.jpeg",
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
        {teamMembers.slice(startIndex, startIndex + visibleCount).map((file, index) => (
          <div className="grid-item" key={index}>
            <img className="profileimg" src={`pictures/${file}`} alt={`Team Member ${index + 1}`} />
            <div className="hidden-text">
              <h2>Designation</h2>
              <p>Your name, your organization name, contact info, the URL of your site, a list of any URLs from with your</p>
              <h3>- Name</h3>
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
