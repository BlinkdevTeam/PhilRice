import React from "react";
import HeroBanner from "../Assets/36thbanner.jpg";
import TimeCount from "../Modal/TimeModal";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <img
          src={HeroBanner}
          alt="Ugnay Palay Banner"
          className="w-full h-auto max-w-[1727px]" // Responsive width and height
        />
        <div className="mt-[-50px] md:mt-[-80px] lg:mt-[-100px] px-4">
          <TimeCount />
        </div>
      </div>
    </>
  );
}
