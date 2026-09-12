import { NavLink, useNavigate } from "react-router-dom";
import logoFull from "../assets/logo-full.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-bar">
        <span>☎ 1-800-234-5678</span>
        <span>✉ support@example.test</span>
      </div>

      <nav className="navbar">
        <div
          className="logo-box"
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
        >
          <img
            className="logo-image"
            src={logoFull}
            alt="Altura Airways"
          />
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/flights">Flights</NavLink>
          </li>

          <li>
            <NavLink to="/manage-booking">Manage Booking</NavLink>
          </li>

          <li>
            <NavLink to="/policies">Policies</NavLink>
          </li>

          <li>
            <NavLink to="/travel-info">Travel Info</NavLink>
          </li>

          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>

        <div className="nav-buttons">
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
