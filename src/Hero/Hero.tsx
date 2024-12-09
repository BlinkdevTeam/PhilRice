import React, { useEffect, useState } from "react";
import HeroBannerDesktop from "../Assets/DesktopBanner.jpg";
import HeroBannerTablet from "../Assets/TabletBanner.jpg";
import HeroBannerMobile from "../Assets/MobileBanner.jpg";
import TimeCount from "../Modal/TimeModal";

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let currentDayMonth = `${day}-${month}`;
  let isConferenceRunning = currentDayMonth === "3-12" || currentDayMonth === "4-12" || currentDayMonth === "5-12" ? true : false;
  let dayTitle = currentDayMonth === "3-12" ? "Day 1:" : currentDayMonth === "4-12" ? "Day 2:" : "Day 3";

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
      <div className="mt-[-60px] md:mt-[-80px] lg:mt-[-50px]">
        <div className="flex flex-col items-center justify-center bg-[#0E9046] rounded-lg w-[307px] h-[110px] sm:w-[457px] sm:h-[157px] md:w-[680px] md:h-[161px] lg:w-[1006px] lg:h-[100px]">
          <h1 className="text-center text-white text-[18px] md:text-[25px] lg:text-[32px] font-bold">
            {/* {`${dayTitle} 36th Ugnay Palay National Rice R4D Conference`} */}
            {`Thank you for participating in the 36th Ugnay Palay National Rice R4D Conference.`}
          </h1>
        </div>
        {/* <TimeCount /> */}
      </div>
    </div>
  );
}
