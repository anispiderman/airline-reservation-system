import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <>
      <Navbar />

      <main className="payment-page">
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

          <div className="progress-step active">
            <div className="progress-number">5</div>
            <span>Payment</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <div className="progress-icon">✔</div>
            <span>Confirmation</span>
          </div>
        </section>

        <section className="payment-layout">
          <div className="payment-left">
            <div className="payment-card">
              <h2>Payment Method</h2>

              <div
                className={`payment-option ${
                  paymentMethod === "card" ? "active-payment" : ""
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                <div className="payment-title">
                  <span className="payment-radio">
                    {paymentMethod === "card" ? "●" : "○"}
                  </span>
                  <strong>Credit / Debit Card</strong>
                </div>

                {paymentMethod === "card" && (
                  <div className="card-form">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" />

                    <div className="payment-row">
                      <div>
                        <label>Expiry Date</label>
                        <input type="text" placeholder="MM / YY" />
                      </div>

                      <div>
                        <label>CVV</label>
                        <input type="text" placeholder="123" />
                      </div>
                    </div>

                    <label>Cardholder Name</label>
                    <input type="text" placeholder="Name on card" />
                  </div>
                )}
              </div>

              <div
                className={`payment-option ${
                  paymentMethod === "paypal" ? "active-payment" : ""
                }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                <span className="payment-radio">
                  {paymentMethod === "paypal" ? "●" : "○"}
                </span>
                <strong>PayPal</strong>
                <span className="payment-logo">PayPal</span>
              </div>

              <div
                className={`payment-option ${
                  paymentMethod === "apple" ? "active-payment" : ""
                }`}
                onClick={() => setPaymentMethod("apple")}
              >
                <span className="payment-radio">
                  {paymentMethod === "apple" ? "●" : "○"}
                </span>
                <strong>Apple Pay</strong>
                <span className="payment-logo"> Pay</span>
              </div>

              <div
                className={`payment-option ${
                  paymentMethod === "google" ? "active-payment" : ""
                }`}
                onClick={() => setPaymentMethod("google")}
              >
                <span className="payment-radio">
                  {paymentMethod === "google" ? "●" : "○"}
                </span>
                <strong>Google Pay</strong>
                <span className="payment-logo">G Pay</span>
              </div>

              <p className="secure-payment">
                🔒 Your payment information is secure and encrypted.
              </p>
            </div>

            <button
              className="back-flight-btn"
              onClick={() => navigate("/passenger-details")}
            >
              ← Back to Passenger Details
            </button>
          </div>

          <div className="payment-right">
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

            <div className="price-breakdown">
              <h2>Price Breakdown</h2>

              <div>
                <span>1 Passenger (Economy)</span>
                <span>$289.00</span>
              </div>
              <div>
                <span>Seat Selection</span>
                <span>$0.00</span>
              </div>
              <div>
                <span>Taxes, Fees & Charges</span>
                <span>$48.76</span>
              </div>

              <hr />

              <div className="price-total">
                <strong>Total</strong>
                <strong>$337.76 CAD</strong>
              </div>
            </div>

            <div className="secure-trip-card">
              <div className="secure-icon">🛡</div>
              <div>
                <h2>Best Price Guarantee</h2>
                <p>We offer the best prices on hundreds of airlines.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="payment-bottom-actions">
            <button 
                className="continue-btn"
                onClick={() => navigate("/confirmation")}
            >
                Continue to Confirmation →
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Payment;