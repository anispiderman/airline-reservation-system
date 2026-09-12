import Navbar from "../components/navbar";
import Footer from "../components/footer";

function AboutUs() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <div>
            <h1>About Us</h1>
            <p>
              We are more than an airline. We are a team of passionate people
              dedicated to making your journey safe, comfortable, and memorable.
            </p>
          </div>
        </section>

        <section className="about-content">
          <div className="about-card">
            <div className="about-icon">🎯</div>
            <div>
              <h2>Our Mission</h2>
              <p>
                To deliver safe, reliable, and affordable travel experiences
                while connecting communities and enriching lives.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-icon">👁</div>
            <div>
              <h2>Our Vision</h2>
              <p>
                To be the world’s most loved airline, known for excellence,
                innovation, and sustainability.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-icon">💎</div>
            <div>
              <h2>Our Values</h2>
              <ul>
                <li>Safety First</li>
                <li>Customer Focus</li>
                <li>Integrity & Respect</li>
                <li>Innovation</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>

          <section className="stats-row">
            <div>
              <span>👥</span>
              <h2>50M+</h2>
              <p>Happy Passengers</p>
            </div>

            <div>
              <span>✈️</span>
              <h2>120+</h2>
              <p>Destinations</p>
            </div>

            <div>
              <span>🌐</span>
              <h2>35</h2>
              <p>Countries</p>
            </div>

            <div>
              <span>🗓</span>
              <h2>18+</h2>
              <p>Years of Service</p>
            </div>
          </section>

          <section className="commitment-box">
            <div className="commitment-left">
              <span>♡</span>
              <div>
                <h2>Our Commitment</h2>
                <p>
                  From sustainable operations to exceptional service, we are
                  committed to making a positive impact — for our passengers,
                  our communities, and our planet.
                </p>
              </div>
            </div>

            <button type="button">
              Learn more about our commitment →
            </button>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutUs;