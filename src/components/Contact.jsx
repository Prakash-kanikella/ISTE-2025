import React from "react";
import "./Contact.css";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a8bdd687-d14b-4412-bbf2-86a83ac99d98"); // Replace with your Web3Forms access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="containerr" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <div className="underline">
            <div className="line"></div>
            <div className="highlight"></div>
          </div>
          <p className="subtitle">We'd love to hear from you!</p>
        </div>

        <div className="row top-row">
          <div>
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>
                National Institute of Technology, Calicut
                <br />
                NIT Campus P.O 673 601,
                <br />
                Kozhikode, India
              </p>
            </div>
          </div>

          <div className="contact-methods">
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>iste-nitc@nitc.ac.in</p>
            </div>
            <div className="info-box">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+91 73561 64971</p>
            </div>
          </div>
        </div>

        <div className="row bottom-row">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3912.1842864729824!2d75.931043!3d11.321237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbe8a77db953bda6c!2sNIT%20-%20Calicut!5e0!3m2!1sen!2sin!4v1631992845951!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
              title="NIT Calicut Location"
            ></iframe>
          </div>

          <div>
            <form onSubmit={onSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Submit Form</button>
              </div>
              <span>{result}</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
