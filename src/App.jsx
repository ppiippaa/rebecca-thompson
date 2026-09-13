import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutRebecca from "./pages/AboutRebecca";
import ContactPricing from "./pages/ContactPricing";
import VoiceSessions from "./pages/VoiceSessions";
import WorkshopsEvents from "./pages/WorkshopsEvents";
import OtherServices from "./pages/OtherServices";

function App() {
  return (
    <>
      <section id="center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-rebecca" element={<AboutRebecca />} />
          <Route path="contact-and-pricing" element={<ContactPricing />} />
          <Route path="voice-sessions" element={<VoiceSessions />} />
          <Route path="workshops-and-events" element={<WorkshopsEvents />} />
          <Route path="other-services" element={<OtherServices />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
