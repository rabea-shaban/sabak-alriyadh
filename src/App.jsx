import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import LeakDetectionPage from "@/pages/services/LeakDetectionPage";
import PipeRepairPage from "@/pages/services/PipeRepairPage";
import HeaterInstallationPage from "@/pages/services/HeaterInstallationPage";
import DrainCleaningPage from "@/pages/services/DrainCleaningPage";
import FaucetInstallationPage from "@/pages/services/FaucetInstallationPage";
import KitchenBathroomPage from "@/pages/services/KitchenBathroomPage";
import MaintenancePage from "@/pages/services/MaintenancePage";
import BestServicesPage from "@/pages/BestServicesPage";
import SitemapPage from "@/pages/SitemapPage";
import Bestsibak from "./pages/services/Bestsibak";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/best-services" element={<BestServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route
              path="/services/leak-detection"
              element={<LeakDetectionPage />}
            />
            <Route path="/services/pipe-repair" element={<PipeRepairPage />} />
            <Route
              path="/services/heater-installation"
              element={<HeaterInstallationPage />}
            />
            <Route
              path="/services/drain-cleaning"
              element={<DrainCleaningPage />}
            />
            <Route
              path="/services/faucet-installation"
              element={<FaucetInstallationPage />}
            />
            <Route path="/services/Bestsibak" element={<Bestsibak />} />
            <Route
              path="/services/kitchen-bathroom"
              element={<KitchenBathroomPage />}
            />
            <Route path="/services/maintenance" element={<MaintenancePage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
