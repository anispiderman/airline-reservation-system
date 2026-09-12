import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

function SelectSeat() {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="seat-page">
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

          <div className="progress-step active">
            <div className="progress-number">3</div>
            <span>Select Seat</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <div className="progress-icon">👤</div>
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

        <section className="seat-summary">
            <h2>Flight Summary</h2>
            <div className="summary-content">
                <div className="summary-airline">
                    <img src="/images/aircanada.png" alt="Air Canada" />
                    <div>
                        <h3>Air Canada</h3>
                        <p>AC123</p>
                    </div>
                </div>

                <div className="summary-time">
                    <h2>09:00 AM</h2>
                    <p>YYZ</p>
                    <span>Toronto</span>
                </div>

                <div className="summary-route">
                    <p>Non-stop</p>
                    <div className="route-line"></div>
                    <small>4h 30m</small>
                </div>

                <div className="summary-time">
                    <h2>12:30 PM</h2>
                    <p>YVR</p>
                    <span>Vancouver</span>
                </div>

                <div className="summary-info">
                    <p>📅 Wed, Jun 25, 2026</p>
                    <p>👤 1 Passenger, Economy</p>

                <button className="change-flight">
                    Change Flight
                </button>
            </div>
        </div>
        </section>

        <section className="seat-layout">
          <div className="left-panel">
            <h2>Select Your Seat</h2>

            <div className="seat-legend">
              <h3>Seat Legend</h3>

              <div className="legend-item">
                <div className="legend-box selected"></div>
                <span>Selected</span>
              </div>

              <div className="legend-item">
                <div className="legend-box available"></div>
                <span>Available</span>
              </div>

              <div className="legend-item">
                <div className="legend-box unavailable"></div>
                <span>Unavailable</span>
              </div>
            </div>

            <div className="help-card">
              <h3>ⓘ Need Help?</h3>
              <p>
                Our customer support team is here to help you choose the best
                seat.
              </p>
              <button>Contact Support</button>
            </div>
          </div>

          <div className="seat-map">
  <div className="airplane-cabin">
    <div className="cabin-nose"></div>

    <div className="seat-letters">
      <span>A</span>
      <span>B</span>
      <span>C</span>
      <span></span>
      <span>D</span>
      <span>E</span>
      <span>F</span>
    </div>

    <div className="airplane">
      {Array.from({ length: 6 }).map((_, row) => (
        <div className="seat-row" key={row}>
          {[1, 2, 3].map((col) => {
            const seat = row * 6 + col;

            return (
              <button
                key={seat}
                className={selectedSeat === seat ? "seat selected" : "seat"}
                onClick={() => setSelectedSeat(seat)}
              >
                {seat}
              </button>
            );
          })}

          <div className="aisle"></div>

          {[4, 5, 6].map((col) => {
            const seat = row * 6 + col;

            return (
              <button
                key={seat}
                className={selectedSeat === seat ? "seat selected" : "seat"}
                onClick={() => setSelectedSeat(seat)}
              >
                {seat}
              </button>
            );
          })}
        </div>
      ))}
    </div>

    <div className="cabin-tail"></div>
  </div>
</div>

          <div className="right-panel">
            <div className="selected-seat-card">
              <h2>Selected Seat</h2>

              {selectedSeat ? (
                <>
                  <h3>{selectedSeat}E</h3>
                  <p>Standard Seat</p>
                  <small>Extra legroom not included</small>
                </>
              ) : (
                <p>No seat selected yet.</p>
              )}
            </div>

            <div className="comfort-card">
              <h3>💺 Want More Comfort?</h3>
              <p>Select an Extra Legroom seat for more space and comfort.</p>
              <button>View Extra Legroom Seats</button>
            </div>

            <div className="trip-card">
              <h2>Trip Total</h2>
              <p>1 Passenger (Economy)</p>

              <p>
                Seat Selection <span>$0.00</span>
              </p>

              <hr />

              <h3>Total: $399.99 CAD</h3>
            </div>

            <button
                className="continue-btn"
                onClick={() => navigate("/passenger-details")}
            >
                Continue to Passenger Details →
                </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SelectSeat;