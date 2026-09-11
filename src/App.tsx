import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Work from "./pages/Work";
import ProjectCase from "./pages/ProjectCase";
import PricingPage from "./pages/PricingPage";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./i18n/LanguageContext";
import bg from "./assets/bg.png";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div
          className="fixed inset-0 -z-10 bg-[#080B2A] bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectCase />} />
          <Route path="/pricing/:slug" element={<PricingPage />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;