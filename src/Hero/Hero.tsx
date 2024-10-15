import React, { useEffect, useState } from "react";
import HeroBanner from "../Assets/36thbanner.jpg";
import MobileHeroBanner from "../Assets/MobileHeroBanner.jpg";
import TimeCount from "../Modal/TimeModal";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust this breakpoint as needed

  // Update the isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <img
        src={isMobile ? MobileHeroBanner : HeroBanner}
        alt="Ugnay Palay Banner"
        className="w-full h-auto max-w-[1727px]" // Responsive width and height
      />
      <div className="mt-[-50px] md:mt-[-80px] lg:mt-[-100px] px-4">
        <TimeCount />
      </div>
    </div>
  );
}
