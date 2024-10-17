import React, { useEffect, useState } from "react";
import HeroBanner from "../Assets/36thbanner.jpg";
import MobileHeroBanner from "../Assets/MobileHeroBanner.jpg";
import TimeCount from "../Modal/TimeModal";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
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
    <div className="flex flex-col w-screen justify-center items-center">
      <img
        src={isMobile ? MobileHeroBanner : HeroBanner}
        alt="Ugnay Palay Banner"
        className="w-screen"
      />
      <div className="mt-[-50px] md:mt-[-80px] lg:mt-[-100px]">
        <TimeCount />
      </div>
    </div>
  );
}
