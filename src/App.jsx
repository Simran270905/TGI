import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ITPage from "../pages/Services/ITPage";
import BPOPage from "../pages/Services/BPOPage";

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
      </Routes>

    </BrowserRouter>
  );
}

export default App;