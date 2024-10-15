import React, { useRef } from "react";
import Hero from "./Hero/Hero";
import TimeModal from "./Modal/TimeModal";
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
      <div className="flex flex-col justify-center items-center pt-[72px]">
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
        {/* <div className="-mt-[100px]">
          <TimeModal />
        </div> */}
        <div ref={aboutRef}>
          <About />
        </div>
        <div className="w-full max-w-[1488px] h-[2px] bg-[#0E9046] my-[24px]" />
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
        <div className="w-full max-w-[1488px] h-[2px] bg-[#EEEEEE] my-[40px]" />
        <div ref={faqRef}>
          <FAQ />
        </div>
        <div className="w-full max-w-[1488px] h-[2px] bg-[#EEEEEE] my-[40px]" />
        <Footer />
        <div className="flex justify-center items-center gap-4 lg:gap-[870px] w-full text-xl px-4 py-4 bg-[#343434]">
          <div>PHILRICE © 2023. All rights reserved.</div>
          <div>
            Powered by <span className="font-bold">BLINK</span> CREATIVE STUDIO
          </div>
        </div>
      </div>
    </>
  );
}
