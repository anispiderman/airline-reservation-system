import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Login() {
  return (
    <>
      <Navbar />

      <main className="auth-page">
        <section className="auth-card">
          <div className="auth-left">
            <h1>Welcome Back</h1>
            <p>Log in to manage bookings, view trips, check flight updates, and access your Altura Airways account.</p>

            <div className="auth-benefit">✈ Manage upcoming flights</div>
            <div className="auth-benefit">🎫 View boarding passes</div>
            <div className="auth-benefit">🔔 Receive travel updates</div>
          </div>

          <div className="auth-form">
            <h2>Login to Your Account</h2>

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <div className="auth-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              
              <span className="forgot-password">Forgot password?</span>
            </div>

            <button className="auth-btn">Login</button>

            <p className="auth-switch">
                Don’t have an account?{" "}
                <Link to="/register" className="auth-link">
                  Create one
                </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Login;