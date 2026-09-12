import Navbar from "../components/navbar";
import Hero from "../components/hero";
import SearchBar from "../components/searchbar";
import Features from "../components/features";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Features />
      <Footer />
    </>
  );
}

export default Home;