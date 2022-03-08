import React from "react";
import { Button } from "react-bootstrap";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-sub-heading">
          The perfect mix of modern luxury business and lifestyle stories. Distilled, not diluted.
        </p>
        <p className="footer-sub-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type='email'
              name='email'
              placeholder='your email'
              className='footer-input'
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <p>Explore</p>
            <p>Services</p>
            <p>Terms & Condition</p>
          </div>

          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <p>Explore</p>
            <p>Services</p>
            <p>Terms & Condition</p>
          </div>

          <div className="footer-link-items">
            <h2>Videos</h2>
            <p>Explore</p>
            <p>Services</p>
            <p>Terms & Condition</p>
          </div>

          <div className="footer-link-items">
            <h2>Social Media</h2>
            <p>Facebook</p>
            <p>Instragram</p>
            <p>Youtube</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Footer;
