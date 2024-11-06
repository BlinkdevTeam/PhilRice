import React, { useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Speaker from "./Speaker/Speaker";
import Conference from "./Conference/Conference";
import Location from "./Location/Location";
import StratPlan from "./StrategicPlanning/StrategicPlanning";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import SpeakerPage from "./Speaker/SpeakerPage";
import Booklet from "./StrategicPlanning/Booklet";
import QrGen from "./QRGen/Qr_Gen";

const Divider = () => (
  <div className="w-11/12 md:w-11/12 lg:w-10/12 h-[2px] bg-[#DDDEDD] my-[12px] mx-auto md:my-[16px] lg:my-[80px]" />
);

function ScrollToSection({ refs }: any) {
  const location = useLocation();

  useEffect(() => {
    const section = location.state?.section;
    if (section && refs[`${section}Ref`]?.current) {
      refs[`${section}Ref`].current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, refs]);

  return null;
}

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const venueRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  const refs = {
    homeRef,
    aboutRef,
    programRef,
    speakersRef,
    venueRef,
    faqsRef,
  };

  return (
    <Router>
      <div className="flex flex-col justify-center items-center pt-[72px] overflow-x-hidden">
        <Navbar refs={refs} />
        <ScrollToSection refs={refs} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div ref={homeRef}>
                  <Hero />
                </div>
                <div ref={aboutRef} className="max-w-[1440px] px-0">
                  <About />
                </div>
                <Divider />
                <div ref={speakersRef}>
                  <Speaker />
                </div>
                <div ref={programRef}>
                  <Conference />
                </div>
                <div ref={venueRef}>
                  <Location />
                </div>
                <div>
                  <StratPlan />
                </div>
                <Divider />
                <div ref={faqsRef}>
                  <FAQ />
                </div>
              </>
            }
          />
          <Route path="/speaker-details" element={<SpeakerPage />} />
          <Route path="/strat-planning" element={<Booklet />} />
          <Route path="/qr-code-generator" element={<QrGen />} />
        </Routes>
        <div className="order-last">
          <Footer refs={refs} />
        </div>
      </div>
    </Router>
  );
}
