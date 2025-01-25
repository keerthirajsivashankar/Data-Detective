import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand">
          <h2>Fraud Detection</h2>
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-tumblr"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>ABOUT</h3>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>RESOURCES</h3>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Anomaly Detection</a></li>
            <li><a href="#">Fraudulant Management</a></li>
            <li><a href="#">Network Traffic Avoider</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTACT</h3>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Location</a></li>
          </ul>
        </div>

        {/* Additional Info */}
        <div className="footer-section additional-info">
          <h3>ADDITIONAL INFO</h3>
          <p>
            We are here to help you to find the anamoly in your csv data using one of the most cuttign edge technology call isolation forest algorithm . Make sure you uplad a .CSV file
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        Lorem ipsum dolor sit amet - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
