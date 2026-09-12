import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Policies() {
  const [activePolicy, setActivePolicy] = useState("Overview");

  const policyMenu = [
    "Overview",
    "Baggage Policy",
    "Change & Cancellation",
    "Refund Policy",
    "Check-In Policy",
    "Travel with Children",
    "Special Assistance",
    "Pet Policy",
    "ID & Travel Documents",
    "Prohibited Items",
    "Flight Disruptions",
  ];

  return (
    <>
      <Navbar />

      <main className="policies-page">
        <section className="policies-header">
          <h1>Our Policies</h1>
          <p>Important information to help you plan your trip with confidence</p>
        </section>

        <section className="policies-container">
          <aside className="policies-sidebar">
            {policyMenu.map((item) => (
              <button
                key={item}
                className={activePolicy === item ? "policy-menu active-policy" : "policy-menu"}
                onClick={() => setActivePolicy(item)}
              >
                <span>{item === "Overview" ? "📄" : item === "Baggage Policy" ? "💼" : item === "Change & Cancellation" ? "🔄" : item === "Refund Policy" ? "💲" : item === "Check-In Policy" ? "👤" : item === "Travel with Children" ? "👨‍👩‍👧" : item === "Special Assistance" ? "♿" : item === "Pet Policy" ? "🐾" : item === "ID & Travel Documents" ? "🪪" : item === "Prohibited Items" ? "🚫" : "🕒"}</span>
                {item}
                <span className="policy-arrow">›</span>
              </button>
            ))}

            <div className="policy-help">
              <div>🎧</div>
              <h3>Need help?</h3>
              <p>Visit our Help Center or contact our support team.</p>
              <button>Help Center →</button>
            </div>
          </aside>

          <section className="policies-content">
            <div className="policy-cards">
              <button className="policy-card" onClick={() => setActivePolicy("Baggage Policy")}>
                <div>💼</div>
                <h3>Baggage Policy</h3>
                <p>View baggage allowance, fees, and restrictions.</p>
                <span>Learn more →</span>
              </button>

              <button className="policy-card" onClick={() => setActivePolicy("Change & Cancellation")}>
                <div>🔄</div>
                <h3>Change & Cancellation</h3>
                <p>Learn about changes, cancellation and fees.</p>
                <span>Learn more →</span>
              </button>

              <button className="policy-card" onClick={() => setActivePolicy("Refund Policy")}>
                <div>💲</div>
                <h3>Refund Policy</h3>
                <p>Understand eligibility and refund timelines.</p>
                <span>Learn more →</span>
              </button>

              <button className="policy-card" onClick={() => setActivePolicy("Check-In Policy")}>
                <div>👤</div>
                <h3>Check-In Policy</h3>
                <p>Check-in options, deadlines and requirements.</p>
                <span>Learn more →</span>
              </button>
            </div>

            <div className="policy-notice">
              <div>🛡</div>
              <div>
                <h3>Important Notice</h3>
                <p>
                  Policies may vary based on fare type, route, and membership status.
                  Please review the applicable terms before you travel.
                </p>
              </div>
            </div>

            <div className="policy-info-grid">
              <div className="policy-table-card">
                <h3>Change & Cancellation Fees</h3>

                <table>
                  <thead>
                    <tr>
                      <th>Route Type</th>
                      <th>Change Fees</th>
                      <th>Cancellation Fees</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Domestic</td>
                      <td>CAD 75</td>
                      <td>CAD 150</td>
                    </tr>

                    <tr>
                      <td>North America</td>
                      <td>CAD 100</td>
                      <td>CAD 200</td>
                    </tr>

                    <tr>
                      <td>International</td>
                      <td>CAD 150</td>
                      <td>CAD 300</td>
                    </tr>
                  </tbody>
                </table>

                <p>ⓘ Fees shown are per passenger and subject to fare rules.</p>
              </div>

              <div className="baggage-card">
                <h3>Baggage Allowance (Economy)</h3>

                <div className="baggage-row">
                  <span>💼</span>
                  <strong>Carry-on Baggage</strong>
                  <p>1 piece up to 7 kg (15 lb)</p>
                </div>

                <div className="baggage-row">
                  <span>✔</span>
                  <strong>Checked Baggage</strong>
                  <p>1 piece up to 23 kg (50 lb)</p>
                </div>

                <div className="baggage-row">
                  <span>📏</span>
                  <strong>Max Dimensions</strong>
                  <p>158 cm (L+W+H)</p>
                </div>

                <button>View full baggage policy →</button>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Policies;