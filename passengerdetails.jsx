import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function PassengerDetails() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="passenger-page">
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

          <div className="progress-step active">
            <div className="progress-number">4</div>
            <span>Passenger Details</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <div className="progress-icon">💳</div>
            <span>Payment</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <div className="progress-icon">✔</div>
            <span>Confirmation</span>
          </div>
        </section>

        <div className="passenger-heading">
          <h1>Passenger Details</h1>
          <p>Please enter the details for all passengers.</p>
        </div>

        <section className="passenger-main-layout">
          <div className="passenger-left">
            <div className="passenger-card">
              <div className="passenger-card-title">
                <span className="passenger-icon">👤</span>
                <h2>Passenger 1 (Adult)</h2>
              </div>

              <div className="passenger-form-grid">
                <div className="form-field">
                  <label>Title</label>
                  <select>
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>First Name <span>*</span></label>
                  <input type="text" placeholder="John" />
                </div>

                <div className="form-field">
                  <label>Last Name <span>*</span></label>
                  <input type="text" placeholder="Doe" />
                </div>

                <div className="form-field">
                  <label>Date of Birth <span>*</span></label>
                  <input type="text" placeholder="May 15, 1990" />
                </div>

                <div className="form-field">
                  <label>Nationality <span>*</span></label>
                  <select>
                    <option>Canada</option>
                    <option>United States</option>
                    <option>India</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Gender <span>*</span></label>
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Passport Number <span>*</span></label>
                  <input type="text" placeholder="AB1234567" />
                </div>

                <div className="form-field">
                  <label>Passport Expiry Date <span>*</span></label>
                  <input type="text" placeholder="May 15, 2030" />
                </div>

                <div className="form-field">
                  <label>Known Traveler Number (Optional)</label>
                  <input type="text" placeholder="Enter KTN" />
                </div>

                <div className="form-field">
                  <label>Redress Number (Optional)</label>
                  <input type="text" placeholder="Enter Redress Number" />
                </div>
              </div>
            </div>

            <div className="passenger-collapsed">
              <div>
                <span className="passenger-icon">👤</span>
                <strong>Passenger 2 (Adult)</strong>
                <p>Please enter details for the second passenger.</p>
              </div>
              <span>⌄</span>
            </div>

            <button
              type="button"
              className="add-infant-btn"
              onClick={(e) => e.preventDefault()}
            >
              ＋ Add Infant (Under 2 years)
            </button>

            <p className="infant-note">
              Infants must be added to a passenger’s lap.
            </p>

            <button
              type="button"
              className="back-flight-btn"
              onClick={() => navigate("/select-seat")}
            >
              ← Back to Flight Options
            </button>
          </div>

          <div className="passenger-right">
            <div className="trip-summary-card">
              <h2>Trip Summary</h2>

              <div className="mini-flight">
                <img src="/images/aircanada.png" alt="Air Canada" />

                <div>
                  <strong>Air Canada</strong>
                  <p>AC123</p>
                </div>

                <div>
                  <strong>09:00 AM</strong>
                  <p>YYZ</p>
                  <p>Toronto</p>
                </div>

                <div className="mini-route">
                  <span>Non-stop</span>
                  <div></div>
                  <small>4h 30m</small>
                </div>

                <div>
                  <strong>12:30 PM</strong>
                  <p>YVR</p>
                  <p>Vancouver</p>
                </div>
              </div>

              <div className="summary-rows">
                <div>
                  <span>📅 Date</span>
                  <strong>Wed, June 25, 2026</strong>
                </div>

                <div>
                  <span>👤 Passenger</span>
                  <strong>1 Adult</strong>
                </div>

                <div>
                  <span>💺 Class</span>
                  <strong>Economy</strong>
                </div>

                <div>
                  <span>🧳 Baggage</span>
                  <strong>Personal item included</strong>
                </div>
              </div>
            </div>

            <div className="secure-trip-card">
              <div className="secure-icon">🛡</div>

              <div>
                <h2>Secure Your Trip</h2>
                <p>
                  Your personal information is protected and used only for
                  booking your flight.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="passenger-bottom-actions">
          <button
            className="continue-btn"
            onClick={() => navigate("/payment")}
          >
            Continue to Payment →
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PassengerDetails;