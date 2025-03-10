import { useState } from "react";
import "./Team.css";
import Frame52 from "../assets/Frame52.png";
import Frame53 from "../assets/Frame53.png";
import Frame54 from "../assets/Frame54.png";
import Frame55 from "../assets/Frame55.png";
import Frame56 from "../assets/Frame56.png";
import Frame57 from "../assets/Frame57.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const teamMembers = [
  {
    name: "Team Member",
    designation: "Designation",
    image: Frame52,
    social: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Team Member",
    designation: "Designation",
    image: Frame53,
    social: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Team Member",
    designation: "Designation",
    image: Frame54,
    social: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Team Member",
    designation: "Designation",
    image: Frame55,
    social: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Team Member",
    designation: "Designation",
    image: Frame56,
    social: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Team Member",
    designation: "Designation",
    image: Frame57,
    social: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className={`team-grid ${selectedMember !== null ? "expanded" : ""}`}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`team-member ${selectedMember === index ? "selected" : ""}`}
            onClick={() => setSelectedMember(selectedMember === index ? null : index)}
          >
            {selectedMember === index ? (
              <div className="team-details">
                <img src={member.image} alt={member.name} className="team-details-image" />
                <h3 className="team-role">{member.designation}</h3>
                <p className="team-info">Your name, your organization name, contact information, the URL of your site, a list of any URLs from which you...</p>
                <p className="team-name">-{member.name}</p>
                <div className="team-socials">
                  <a href={member.social.facebook} className="social-icon facebook"><img src={facebook}></img></a>
                  <a href={member.social.linkedin} className="social-icon linkedin"><img src={linkedin}></img></a>
                  <a href={member.social.instagram} className="social-icon instagram"><img src={instagram}></img></a>
                </div>
              </div>
            ) : (
              <img src={member.image} alt={member.name} className="team-image" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}