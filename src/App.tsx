import React from "react";
import Hero from "./Hero/Hero";
import TimeModal from "./Modal/TimeModal";
import About from "./About/About";
import Speaker from "./Speaker/Speaker";
import Conference from "./Conference/Conference";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10">
        <Hero />
        <div className="mt-6">
          {/* Centering TimeModal below the banner */}
          <TimeModal />
        </div>
        <About />
        <div className="w-[1488px] h-[2px] bg-[#0E9046] my-[24px]" />
        <Speaker />
        <Conference />
      </div>
    </>
  );
}
