import Navbar from "../components/navbar";
import Footer from "../components/footer";

function TravelInfo() {
  const destinations = [
    {
      city: "New York, USA",
      text: "Explore the city that never sleeps.",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80",
    },
    {
      city: "London, UK",
      text: "Experience history and modern culture.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    },
    {
      city: "Paris, France",
      text: "Discover art, fashion, and iconic landmarks.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    },
    {
      city: "Tokyo, Japan",
      text: "Where tradition meets innovation.",
      image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80",
    },
    {
      city: "Cancun, Mexico",
      text: "Enjoy beaches, sunshine, and clear blue water.",
      image: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=600&q=80",
    },
    {
      city: "Rome, Italy",
      text: "Walk through ancient history and culture.",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
    },
    {
      city: "Athens, Greece",
      text: "Explore historic ruins and Mediterranean views.",
      image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=600&q=80",
    },
  ];

    const scrollDestinations = () => {
        const slider = document.querySelector(".destination-scroll");
        slider.scrollBy({ left: 920, behavior: "smooth" });
    };

  return (
    <>
      <Navbar />

      <main className="travel-page">
        <section className="travel-hero">
          <div>
            <h1>Travel Information</h1>
            <p>Everything you need to know for a smooth and enjoyable journey.</p>
          </div>
        </section>

        <section className="quick-links-card">
          <h2>Quick Links</h2>

          <div className="quick-links">
            <button>🛂 Travel Requirements</button>
            <button>💼 Baggage Information</button>
            <button>🛡 Health & Safety Guidelines</button>
            <button>♿ Special Assistance</button>
            <button>📄 Visa & Travel Documents</button>
            <button>🕒 Flight Disruptions</button>
            <button>❔ Help Center</button>
          </div>
        </section>

        <section className="travel-main-grid">
          <div className="popular-card">
            <div className="section-title-row">
              <h2>Popular Destinations</h2>

              <button
                className="destination-arrow"
                type="button"
                onClick={scrollDestinations}
              >
                ›
              </button>
            </div>

            <div className="destination-scroll">
              {destinations.map((place) => (
                <div className="destination-card" key={place.city}>
                  <img src={place.image} alt={place.city} />
                  <h3>{place.city}</h3>
                  <p>{place.text}</p>
                  <button type="button">View guide →</button>
                </div>
              ))}
            </div>
          </div>

          <div className="before-card">
            <h2>Before you Travel</h2>

            <div className="before-item">
              <span>👤</span>
              <div>
                <h3>Check-in Information</h3>
                <p>When and how to check in for your flight.</p>
              </div>
            </div>

            <div className="before-item">
              <span>✈</span>
              <div>
                <h3>Airport Information</h3>
                <p>Find information about airports and terminals.</p>
              </div>
            </div>

            <div className="before-item">
              <span>🚫</span>
              <div>
                <h3>Security & Prohibited Items</h3>
                <p>Items you can’t bring on board.</p>
              </div>
            </div>

            <div className="before-item">
              <span>💼</span>
              <div>
                <h3>Travel Tips</h3>
                <p>Helpful tips for a stress-free journey.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="resources-card">
          <h2>Travel Guides & Resources</h2>

          <div className="resources-grid">
            <button type="button">
              <span>💼</span>
              <div>
                <h3>Baggage Guide</h3>
                <p>Learn about allowance, fees and restrictions.</p>
                <small>Learn more →</small>
              </div>
            </button>

            <button type="button">
              <span>🏥</span>
              <div>
                <h3>Health & Safety</h3>
                <p>Stay informed about health advisories.</p>
                <small>Learn more →</small>
              </div>
            </button>

            <button type="button">
              <span>🌐</span>
              <div>
                <h3>Entry Requirements</h3>
                <p>Check visa, passport, and entry rules.</p>
                <small>Learn more →</small>
              </div>
            </button>

            <button type="button">
              <span>💲</span>
              <div>
                <h3>Currency & Money</h3>
                <p>Useful information about currency and payment.</p>
                <small>Learn more →</small>
              </div>
            </button>

            <button type="button">
              <span>🌧</span>
              <div>
                <h3>Weather Information</h3>
                <p>Check the weather at your destination.</p>
                <small>Learn more →</small>
              </div>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default TravelInfo;