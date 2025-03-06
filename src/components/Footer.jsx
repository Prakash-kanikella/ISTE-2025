import "./Footer.css"; // Import the CSS file

function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <div className="address">
          <h3>INDIAN SOCIETY FOR TECHNICAL EDUCATION</h3>
          <h4>NATIONAL INSTITUTE OF TECHNOLOGY, CALICUT</h4>
          <h4>NIT CAMPUS P.O 673 601,</h4>
          <h4>KOZHIKODE, INDIA</h4>
        </div>
        <div className="subscribe">
          <h3>SUBSCRIBE TO TECHQUILA</h3>
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
        <div className="contacts">
          <p>CONTACT</p>
          <h4>LIKHITH (SECRETARY) : +91 91138 38324</h4>
          <h4>AARON JOSEPH (JOINT SECRETARY) : +91 98954 4559</h4>
          <h4>SAI DATHU (JOINT SECRETARY) : +91 80742 34873</h4>
        </div>
      </div>
      <div className="copyright">
        © Copyright <b>ISTE NITC</b>. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
