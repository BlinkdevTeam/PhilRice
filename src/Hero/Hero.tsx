import React, { useEffect, useState } from "react";
import HeroBanner from "../Assets/36thbanner.jpg";
import MobileHeroBanner from "../Assets/MobileHeroBanner.jpg";
import TimeCount from "../Modal/TimeModal";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Set initial state based on current width

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      if (mobileView !== isMobile) {
        setIsMobile(mobileView);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]); // Add isMobile to dependencies to check for changes

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <img
        src={isMobile ? MobileHeroBanner : HeroBanner}
        alt="Ugnay Palay Banner"
        className="w-screen h-auto" // Responsive width and height
      />
      <div className="mt-[-50px] md:mt-[-80px] lg:mt-[-100px] px-4">
        <TimeCount />
      </div>
    </div>
  );
}
