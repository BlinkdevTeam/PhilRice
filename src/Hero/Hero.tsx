import React from "react";
import HeroBanner from "../Assets/36thbanner.jpg";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src={HeroBanner}
          className="h-auto w-screen"
          alt="Ugnay Palay Banner"
        />
      </div>
    </>
  );
}
