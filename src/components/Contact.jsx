import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage('');
        setIsError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitMessage("All fields are required.");
      setIsError(true);
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setSubmitMessage("Please enter a valid email.");
      setIsError(true);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setSubmitMessage(data.message);
      setIsError(!res.ok);

      if (res.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      setSubmitMessage("Network error. Please try again.");
      setIsError(true);
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
              <p>National Institute of Technology, Calicut<br />NIT Campus P.O 673 601,<br />Kozhikode, India</p>
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
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {submitMessage && (
                <div
                  className={`form-message ${isError ? "error" : "success"}`}
                  style={{ textAlign: "center", marginBottom: "10px" }}
                >
                  {submitMessage}
                </div>
              )}

              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
