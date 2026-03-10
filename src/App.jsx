import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ITPage from "./pages/Services/ITPage";
import BPOPage from "./pages/Services/BPOPage";
import NonITPage from "./pages/Services/NonITPage";
import AccountingPage from "./pages/Services/AccountingPage";
import HealthcarePage from "./pages/Services/HealthcarePage";
import CorperatePage from "./pages/Services/CorperatePage";
import OurClientPage from "./pages/OurClientPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactUsPage from "./pages/ContactUsPage"; 

function App() {
  return (
    <BrowserRouter>

      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        {/* Services Routes */}
        <Route path="/services/it" element={<ITPage />} />
        <Route path="/services/bpo" element={<BPOPage />} />
        <Route path="/services/non-it" element={<NonITPage />} />
        <Route path="/services/accounting" element={<AccountingPage />} />
        <Route path="/services/healthcare" element={<HealthcarePage />} />
        <Route path="/services/corperate" element={<CorperatePage />} />
        <Route path="/our-clients" element={<OurClientPage   />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;