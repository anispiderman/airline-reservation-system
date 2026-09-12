import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Register() {
  return (
    <>
      <Navbar />

      <main className="auth-page">
        <section className="auth-card">
          <div className="auth-left">
            <h1>Create Your Altura Account</h1>
            <p>Sign up to book faster, save passenger details, track trips, and manage your travel in one place.</p>

            <div className="auth-benefit">✓ Faster checkout</div>
            <div className="auth-benefit">✓ Saved trip history</div>
            <div className="auth-benefit">✓ Exclusive travel updates</div>
          </div>

          <div className="auth-form">
            <h2>Register</h2>

            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Create a password" />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />

            <button className="auth-btn">Create Account</button>

            <p className="auth-switch">
                Already have an account?{" "}
                <Link to="/login" className="auth-link">
                Login
                </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Register;