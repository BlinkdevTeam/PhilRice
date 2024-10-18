import React, { useRef } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Speaker from "./Speaker/Speaker";
import Conference from "./Conference/Conference";
import Location from "./Location/Location";
import StratPlan from "./StrategicPlanning/StrategicPlanning";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const speakerRef = useRef(null);
  const conferenceRef = useRef(null);
  const locationRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[72px] overflow-x-hidden">
        <Navbar
          scrollToSection={scrollToSection}
          refs={{
            homeRef,
            aboutRef,
            speakerRef,
            conferenceRef,
            locationRef,
            faqRef,
          }}
        />
        <div ref={homeRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div className="w-11/12 md:w-11/12 lg:w-10/12 h-[2px] bg-[#DDDEDD] my-[24px] mx-auto md:my-[16px] lg:my-[32px]" />
        <div ref={speakerRef}>
          <Speaker />
        </div>
        <div ref={conferenceRef}>
          <Conference />
        </div>
        <div ref={locationRef}>
          <Location />
        </div>
        <div className="mt-28">
          <StratPlan />
        </div>
        <div className="w-11/12 md:w-11/12 lg:w-10/12 h-[2px] bg-[#DDDEDD] my-[24px] mx-auto md:my-[16px] lg:my-[32px]" />
        <div ref={faqRef}>
          <FAQ />
        </div>
        <div>
          <Footer />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-white text-center w-full h-[66px] md:h-[108px] lg:h-[58px] text-[13px] md:text-[22px] px-4 bg-[#343434]">
          <div>PHILRICE © 2023. All rights reserved.</div>
          <div>
            Powered by <span className="font-bold">BLINK</span> CREATIVE STUDIO
          </div>
        </div>
      </div>
    </>
  );
}
