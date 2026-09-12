import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/home";
import Flights from "./pages/flights";
import SelectSeat from "./pages/selectseat";
import PassengerDetails from "./pages/passengerdetails";
import Payment from "./pages/payment";
import Confirmation from "./pages/confirmation";
import ManageBooking from "./pages/managebooking";
import Policies from "./pages/policies";
import TravelInfo from "./pages/travelinfo";
import AboutUs from "./pages/aboutus";
import Login from "./pages/login";
import Register from "./pages/register";
import Loading from "./components/loading";

function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="page-fade">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/select-seat" element={<SelectSeat />} />
        <Route path="/passenger-details" element={<PassengerDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/manage-booking" element={<ManageBooking />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/travel-info" element={<TravelInfo />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;