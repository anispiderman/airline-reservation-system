import heroBanner from "../assets/hero-banner.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0.05)), url(${heroBanner})`,
      }}
    >
      <div className="hero-content">
        <h1>Your Journey,<br />Our Priority</h1>
        <p>Search, book, and manage your flights with ease — anytime, anywhere.</p>
      </div>
    </section>
  );
}

export default Hero;