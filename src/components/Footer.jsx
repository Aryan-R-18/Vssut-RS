import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Robotics Society</h3>
            <p>Innovating the future through robotics and automation.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: vssut_robotics@vssut.ac.in</p>
            <p>Phone: 8458083644(Co-ordinator)</p>
            <div className="social-links">
              <a href="https://www.facebook.com/vssutrobotics/" aria-label="Facebook"><i className="fa-brands fa-meta"></i></a>
              <a href="https://x.com/societyrobotics" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/vssut_robotics/?hl=en" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/vssutrobotics/posts/?feedView=all" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/Vssut-Robotics" aria-label="Github"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>

          <div className="footer-section footer-map">
              <h3>Our Location</h3>
              <iframe
                title="Robotics Club VSSUT Burla"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d232.0189636885177!2d83.90305627298841!3d21.495832117948204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747425438369!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://www.google.com/maps/place/21%C2%B029'45.0%22N+83%C2%B054'11.0%22E/@21.4958321,83.9030563,21z"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >  
              </a>
            </div>

          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Robotics Society. All rights reserved.</p>
            <div className="developer-credits">
              <p>Lead Developer: Pattanaik Ayushman Alok</p>
              <p>Junior Developers: Aryan Rajguru, Remit Patra and Rounak Senapati</p>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;