import React from "react";
import Hero from "./Hero/Hero";
import TimeModal from "./Modal/TimeModal";
import About from "./About/About";
import Speaker from "./Speaker/Speaker";
import Conference from "./Conference/Conference";
import Location from "./Location/Location";
import StratPlan from "./StrategicPlanning/StrategicPlanning";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 bg-slate-500">
        <Hero />
        <div className="-mt-[100px]">
          <TimeModal />
        </div>
        <About />
        <div className="w-[1488px] h-[2px] bg-[#0E9046] my-[24px]" />
        <Speaker />
        <Conference />
        <Location />
        <StratPlan />
        <div className="w-[1488px] h-[2px] bg-[#EEEEEE] my-[40px]" />
        <FAQ />
        <div className="w-[1488px] h-[2px] bg-[#EEEEEE] my-[40px]" />
        <Footer />
        <div className="">
          <div>PHILRICE © 2023. All rights reserved.</div>
          <div>Powered by BLINK CREATIVE STUDIO</div>
        </div>
      </div>
    </>
  );
}
