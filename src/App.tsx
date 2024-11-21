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
import DynamicQR from "./DynamicQR/Dynamic_QR";
import ProgramSched from "./Conference/ProgramSched";
import SpeakerPagerev from "./Speaker/SpeakerPagerev";

const Divider = () => (
  <div className="w-11/12 md:w-11/12 lg:w-10/12 h-[2px] bg-[#DDDEDD] my-[40px] mx-auto" />
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

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This adds a smooth scrolling animation
  });
};

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const venueRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const stratplanRef = useRef<HTMLDivElement>(null);

  const refs = {
    homeRef,
    aboutRef,
    programRef,
    speakersRef,
    venueRef,
    faqsRef,
    stratplanRef,
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
                {/* <Divider />
                <div ref={speakersRef}>
                  <Speaker />
                </div> */}
                <div ref={programRef}>
                  <ProgramSched />
                  {/* <Conference /> */}
                </div>
                <div ref={venueRef}>
                  <Location />
                </div>
                <div ref={stratplanRef}>
                  <StratPlan />
                </div>
                <Divider />
                <div ref={faqsRef}>
                  <FAQ />
                </div>
              </>
            }
          />
          <Route path="/speaker-details" element={<SpeakerPagerev />} />
          <Route path="/strat-planning" element={<Booklet />} />
          <Route path="/qr-code-generator" element={<QrGen />} />
          <Route path="/dynamic-qr-code" element={<DynamicQR />} />
        </Routes>
        <div className="order-last">
          <Footer refs={refs} />
        </div>
        <div
          className="border-[#F3B71C] border-2 rounded-full flex justify-center items-center w-[33px] h-[33px] md:w-[53px] md:h-[53px] lg:w-[56px] lg:h-[56px] p-2 cursor-pointer fixed bottom-8 right-8"
          onClick={handleScrollToTop}>
          <svg
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 26.8425V2.63867"
              stroke="#F3B71C"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 13.2858L13 1.66797L25 13.2858"
              stroke="#F3B71C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Router>
  );
}
