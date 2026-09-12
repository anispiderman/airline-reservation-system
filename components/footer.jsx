import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaApple, FaGooglePlay } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>We make travel simple, affordable, and accessible for everyone.</p>

        <div className="social-icons">
          <span><FaFacebookF /></span>
          <span><FaTwitter /></span>
          <span><FaInstagram /></span>
          <span><FaLinkedinIn /></span>
        </div>
      </div>

      <div className="footer-column">
        <h3>Company</h3>
        <p>Careers</p>
        <p>Press</p>
        <p>Blog</p>
        <p>Contact Us</p>
      </div>

      <div className="footer-column">
        <h3>Support</h3>
        <p>Help Center</p>
        <p>FAQs</p>
        <p>Baggage Policy</p>
        <p>Terms & Conditions</p>
      </div>

      <div className="footer-column">
        <h3>Travel Info</h3>
        <p>Travel Restrictions</p>
        <p>Airport Information</p>
        <p>Visa Information</p>
        <p>Travel Insurance</p>
      </div>

      <div className="footer-column">
        <h3>Download Our App</h3>

        <button className="store-btn">
          <FaApple /> App Store
        </button>

        <button className="store-btn">
          <FaGooglePlay /> Google Play
        </button>
      </div>
    </footer>
  );
}

export default Footer;