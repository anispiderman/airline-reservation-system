import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function ManageBooking() {
      const [showManage, setShowManage] = useState(false);

  const [reservation, setReservation] = useState({
    departureDate: "2026-06-25",
    seatNumber: "5E",
    status: "Confirmed",
  });

  const [editedReservation, setEditedReservation] = useState({
    departureDate: "2026-06-25",
    seatNumber: "5E",
  });

  const [message, setMessage] = useState("");

  const handleSaveChanges = () => {
    if (
      editedReservation.departureDate.trim() === "" ||
      editedReservation.seatNumber.trim() === ""
    ) {
      setMessage("Please complete all reservation fields.");
      return;
    }

    setReservation({
      ...reservation,
      departureDate: editedReservation.departureDate,
      seatNumber: editedReservation.seatNumber,
    });

    setShowManage(false);
    setMessage("Reservation updated successfully.");
  };

  const handleCancelReservation = () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this reservation?"
    );

    if (!confirmed) {
      return;
    }

    setReservation({
      ...reservation,
      status: "Cancelled",
    });

    setShowManage(false);
    setMessage("Reservation cancelled successfully.");
  };
  return (
    <>
      <Navbar />

      <main className="manage-page">
        <section className="manage-header">
          <h1>Manage Your Bookings</h1>
          <p>View your upcoming trips and past bookings.</p>
        </section>
        {message && <p className="manage-message">{message}</p>}

        <section className="retrieve-card">
          <h2>Retrieve a Booking</h2>

          <div className="retrieve-grid">
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Enter last name" />
            </div>

            <div>
              <label>Booking Reference (PNR)</label>
              <input type="text" placeholder="Enter PNR (e.g., ABC123)" />
            </div>

            <div>
              <label>Email Address</label>
              <input type="email" placeholder="Enter email used for booking" />
            </div>

            <button>Find My Booking</button>
          </div>

          <div className="retrieve-divider">
            <span></span>
            <strong>OR</strong>
            <span></span>
          </div>

          <div className="login-booking-row">
            <p>Log in to your account to see all your bookings in one place.</p>
            <button>👤 Login to My Account</button>
          </div>
        </section>

        <section className="bookings-card">
          <h2>Your Bookings</h2>

          <div className="booking-row">
            <div className="booking-plane">✈</div>

            <div className="booking-pnr">
              <span className="status upcoming">Upcoming</span>
              <h3>PNR: ABX26V7K</h3>
              <p>Booked on May 10, 2026</p>
            </div>

            <img src="/images/aircanada.png" alt="Air Canada" />

            <div className="booking-route">
              <h3>Toronto (YYZ) → Vancouver (YVR)</h3>
              <p>{reservation.departureDate} | 09:00 AM – 12:30 PM</p>
              <p>1 Passenger | Economy | Seat {reservation.seatNumber}</p>
            </div>

            <span
  className={
    reservation.status === "Cancelled"
      ? "status cancelled"
      : "status confirmed"
  }
>
  {reservation.status}
</span>

            <button
  className="manage-booking-btn"
  disabled={reservation.status === "Cancelled"}
  onClick={() => {
    setShowManage(true);
    setMessage("");
  }}
>
  Manage Booking
</button>

{showManage && (
  <div className="modify-booking-panel">
    <h3>Modify Reservation</h3>

    <label>
      New Travel Date
      <input
        type="date"
        value={editedReservation.departureDate}
        onChange={(e) =>
          setEditedReservation({
            ...editedReservation,
            departureDate: e.target.value,
          })
        }
      />
    </label>

    <label>
      New Seat Number
      <input
        type="text"
        value={editedReservation.seatNumber}
        onChange={(e) =>
          setEditedReservation({
            ...editedReservation,
            seatNumber: e.target.value,
          })
        }
      />
    </label>

    <div className="modify-booking-actions">
      <button type="button" onClick={handleSaveChanges}>
        Save Changes
      </button>

      <button type="button" onClick={handleCancelReservation}>
        Cancel Reservation
      </button>

      <button
        type="button"
        onClick={() => {
          setShowManage(false);
          setMessage("");
        }}
      >
        Back
      </button>
    </div>
  </div>
)}
            <span className="menu-dots">⋮</span>
          </div>

          <div className="booking-row">
            <div className="booking-plane">✈</div>

            <div className="booking-pnr">
              <span className="status completed">Completed</span>
              <h3>PNR: ABR17QSL</h3>
              <p>Booked on Jan 2, 2026</p>
            </div>

            <img src="/images/aircanada.png" alt="Air Canada" />

            <div className="booking-route">
              <h3>Vancouver (YVR) → Toronto (YYZ)</h3>
              <p>Mon, Feb 18, 2026 | 03:15 PM — 10:45 PM</p>
              <p>1 Passenger | Economy | Seat 12A</p>
            </div>

            <span className="status completed">Completed</span>

            <button className="manage-booking-btn">View Details</button>

            <span className="menu-dots">⋮</span>
          </div>

          <div className="booking-row">
            <div className="booking-plane">✈</div>

            <div className="booking-pnr">
              <span className="status completed">Completed</span>
              <h3>PNR: ARS84M2P</h3>
              <p>Booked on Jun 14, 2025</p>
            </div>

            <img src="/images/aircanada.png" alt="Air Canada" />

            <div className="booking-route">
              <h3>Toronto (YYZ) → Calgary (YYC)</h3>
              <p>Fri, Jul 24, 2025 | 11:20 AM — 01:05 PM</p>
              <p>1 Passenger | Economy | Seat 6C</p>
            </div>

            <span className="status completed">Completed</span>

            <button className="manage-booking-btn">View Details</button>

            <span className="menu-dots">⋮</span>
          </div>

          <p className="cant-find">Can’t find your booking?</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ManageBooking;