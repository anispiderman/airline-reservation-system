import { FaShieldAlt, FaTag, FaHeadset, FaSuitcaseRolling } from "react-icons/fa";

function Features() {
  return (
    <section className="features">
      <div className="feature">
        <FaShieldAlt className="feature-icon" />
        <div>
          <h3>Secure Booking</h3>
          <p>Your personal information is safe with us.</p>
        </div>
      </div>

      <div className="feature">
        <FaTag className="feature-icon" />
        <div>
          <h3>Best Price Guarantee</h3>
          <p>We offer the best prices on hundreds of airlines.</p>
        </div>
      </div>

      <div className="feature">
        <FaHeadset className="feature-icon" />
        <div>
          <h3>24/7 Customer Support</h3>
          <p>Our dedicated team is here to help anytime.</p>
        </div>
      </div>

      <div className="feature">
        <FaSuitcaseRolling className="feature-icon" />
        <div>
          <h3>Easy & Fast Booking</h3>
          <p>Book your next trip in just a few clicks.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;