import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="confirmation-page">
        <section className="booking-progress">
          <div className="progress-step completed">
            <div className="progress-icon">🔍</div>
            <span>Search</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step completed">
            <div className="progress-icon">✈️</div>
            <span>Select Flight</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step completed">
            <div className="progress-icon">💺</div>
            <span>Select Seat</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step completed">
            <div className="progress-icon">👤</div>
            <span>Passenger Details</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step completed">
            <div className="progress-icon">💳</div>
            <span>Payment</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step active">
            <div className="progress-number">6</div>
            <span>Confirmation</span>
          </div>
        </section>

        <section className="confirmation-card">
          <div className="confirmation-hero">
            <div className="success-check">✓</div>

            <h1>Your Booking is Confirmed!</h1>

            <p>
              Thank you for choosing <strong>Airline Reservation System.</strong>
            </p>

            <p>
              A confirmation email has been sent to{" "}
              <strong className="blue-text">passenger@example.test</strong>
            </p>

            <div className="pnr-box">
              <p>Booking Reference (PNR)</p>
              <h2>ARS26V7K</h2>
              <button>📋 Copy PNR</button>
            </div>
          </div>

          <hr />

          <div className="booking-info-row">
            <div className="booking-info">
              <span>🗓</span>
              <div>
                <h3>Booking Details</h3>
                <p>Booking Date</p>
                <small>June 25, 2026</small>
                <small>10:30 AM (EST)</small>
              </div>
            </div>

            <div className="booking-info">
              <span>✉️</span>
              <div>
                <h3>Email</h3>
                <p>passenger@example.test</p>
              </div>
            </div>

            <div className="booking-info">
              <span>📞</span>
              <div>
                <h3>Contact Number</h3>
                <p>+1 416 234 5678</p>
              </div>
            </div>

            <div className="whats-next">
              <h3>🛡 What’s Next?</h3>
              <p>✅ Check-in opens 24 hours before departure.</p>
              <p>✅ Bring a valid government-issued photo ID.</p>
              <p>✅ Arrive at the airport at least 2 hours before departure.</p>
            </div>
          </div>

          <div className="manage-booking-box">
            <span>✈️</span>
            <div>
              <h3>Manage Your Booking Anytime</h3>
              <p>
                View your itinerary, make changes, select seats, add services and more.
              </p>
            </div>
          </div>
        </section>

        <button className="home-btn" onClick={() => navigate("/")}>
          🏠 Back to Home
        </button>
      </main>

      <Footer />
    </>
  );
}

export default Confirmation;
