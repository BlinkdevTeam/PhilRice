import React, { useEffect, useState } from "react";
import HeroBannerDesktop from "../Assets/DesktopBanner.jpg";
import HeroBannerTablet from "../Assets/TabletBanner.jpg";
import HeroBannerMobile from "../Assets/MobileBanner.jpg";
import TimeCount from "../Modal/TimeModal";

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let bannerSrc;
  if (windowWidth >= 1024) {
    bannerSrc = HeroBannerDesktop;
  } else if (windowWidth >= 768) {
    bannerSrc = HeroBannerTablet;
  } else {
    bannerSrc = HeroBannerMobile;
  }

  return (
    <div className="flex flex-col w-screen justify-center items-center">
      <img src={bannerSrc} alt="Ugnay Palay Banner" className="w-screen" />
      <div className="mt-[-60px] md:mt-[-80px] lg:mt-[-100px]">
        <TimeCount />
      </div>
    </div>
  );
}
