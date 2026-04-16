import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import AuraBackground from "./components/AuraBackground";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DataDeletion from "./pages/DataDeletion";
import TopBar from "./components/TopBar";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <AuraBackground />
      <TopBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
