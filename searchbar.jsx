import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("book");

  return (
    <section className="search-card">
      <div className="booking-tabs">
        <button
          className={tripType === "book" ? "active-tab" : ""}
          onClick={() => setTripType("book")}
        >
          ✈ Book Flights
        </button>

        <button
          className={tripType === "round" ? "active-tab" : ""}
          onClick={() => setTripType("round")}
        >
          ⟳ Round Trip
        </button>

        <button
          className={tripType === "oneway" ? "active-tab" : ""}
          onClick={() => setTripType("oneway")}
        >
          ➜ One Way
        </button>

        <button
          className={tripType === "multi" ? "active-tab" : ""}
          onClick={() => setTripType("multi")}
        >
          ✈ Multi-City
        </button>
      </div>

      <div className="search-grid">
        <div className="search-field">
          <label>From</label>
          <input type="text" placeholder="Departure city or airport" />
        </div>

        <div className="search-field">
          <label>To</label>
          <input type="text" placeholder="Destination city or airport" />
        </div>

        <div className="search-field">
          <label>
            {tripType === "multi" ? "Flight 1 Departure" : "Departure Date"}
          </label>
          <input type="date" />
        </div>

        {tripType !== "oneway" && (
          <div className="search-field">
            <label>
              {tripType === "multi" ? "Flight 2 Departure" : "Return Date"}
            </label>
            <input type="date" />
          </div>
        )}

        <div className="search-field">
          <label>Passengers</label>
          <input
            type="text"
            placeholder={
              tripType === "multi"
                ? "2 Flights, 1 Passenger"
                : "1 Passenger, Economy"
            }
          />
        </div>

        {tripType === "multi" && (
          <>
            <div className="search-field">
              <label>Second From</label>
              <input type="text" placeholder="Next departure city" />
            </div>

            <div className="search-field">
              <label>Second To</label>
              <input type="text" placeholder="Next destination city" />
            </div>
          </>
        )}
      </div>

      <button className="search-btn" onClick={() => navigate("/flights")}>
        Search Flights
      </button>
    </section>
  );
}

export default SearchBar;