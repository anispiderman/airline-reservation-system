import { useEffect, useState } from "react";
import { getFlights } from "../api/api";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

function Flights() {
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFlights()
      .then((data) => setFlights(data))
      .catch((error) => console.error("Error loading flights:", error));
  }, []);

  return (
    <>
      <Navbar />

      <main className="flights-page">
        <section className="flight-search-summary">
          <div>
            <span>From</span>
            <h2>Toronto (YYZ)</h2>
            <p>Lester B. Pearson Intl.</p>
          </div>

          <div className="swap-icon">⇄</div>

          <div>
            <span>To</span>
            <h2>Vancouver (YVR)</h2>
            <p>Vancouver Intl.</p>
          </div>

          <div>
            <span>Departure</span>
            <h2>Wed, Jun 25, 2026</h2>
          </div>

          <div>
            <span>Passengers</span>
            <h2>1 Passenger, Economy</h2>
          </div>

          <button className="modify-btn">✎ Modify Search</button>
        </section>

        <section className="flights-layout">
          <aside className="filters">
            <div className="filter-header">
              <h3>Filter Results</h3>
              <button>Clear All</button>
            </div>

            <h4>Stops</h4>
            <label><input type="checkbox" defaultChecked /> Non-stop</label>
            <label><input type="checkbox" /> 1 Stop</label>
            <label><input type="checkbox" /> 2+ Stops</label>

            <h4>Departure Time</h4>
            <input type="range" />

            <h4>Arrival Time</h4>
            <input type="range" />

            <h4>Airlines</h4>
            <label><input type="checkbox" defaultChecked /> Altura Airways</label>
            <label><input type="checkbox" /> Air Canada</label>
            <label><input type="checkbox" /> WestJet</label>
            <label><input type="checkbox" /> Porter Airlines</label>
          </aside>

          <section className="flight-results">
            <h3>{flights.length} flights found</h3>

            {flights.map((flight) => (
              <div className="result-card" key={flight.id}>
                <div className="airline-mark">

                  <img
                    src={
                      flight.airline === "Air Canada"
                        ? "/images/aircanada.png"
                        : flight.airline === "WestJet"
                        ? "/images/westjet.png"
                        : flight.airline === "Porter Airlines"
                        ? "/images/porter.png"
                        : "/images/altura-logo.png"
                    }
                    alt={flight.airline}
                    className="airline-logo"
                  />

                  <p>{flight.airline}</p>
                  <small>{flight.flight_number}</small>
                </div>

                <div className="flight-time">
                  <h2>{new Date(flight.departure_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h2>
                  <p>{flight.departure_city}</p>
                </div>

                <div className="route-line">
                  <span>Non-stop</span>
                  <div></div>
                  <small>Direct Flight</small>
                </div>

                <div className="flight-time">
                  <h2>{new Date(flight.arrival_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h2>
                  <p>{flight.arrival_city}</p>
                </div>

                <div className="price-box">
                  <small>From</small>
                  <h2>${flight.price}</h2>
                  <p>Round trip</p>
                </div>

                <div className="details-box">
                  <button onClick={() => navigate("/select-seat")}>
                    View Details ›
                  </button>
                  <p>Seats left: {flight.seats_available}</p>
                </div>
              </div>
            ))}

            <div className="pagination">
              <button>‹</button>
              <button className="active-page">1</button>
              <button>2</button>
              <button>3</button>
              <button>›</button>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Flights;