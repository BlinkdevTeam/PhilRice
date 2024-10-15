import React, { useState } from "react";
import Logo from "../Assets/FooterLogoBW.png";
import LogoHover from "../Assets/FooterLogoColored.png";
import Phone from "../Assets/Icons/phone.svg";
import Email from "../Assets/Icons/email.svg";
import Facebook from "../Assets/Icons/facebook.svg";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-24 justify-center w-full bg-[#0C6972] px-4 md:px-8 lg:px-16 xl:px-32 py-12">
      {/* Logo Section */}
      <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mt-[0px] flex justify-center lg:block">
        <img
          src={isHovered ? LogoHover : Logo}
          alt="PhilRice logo"
          className="w-full max-w-xs lg:max-w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      {/* Contact Info and Useful Links Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-48 mb-8 lg:mb-0 lg:mt-[80px]">
        <div className="text-center lg:text-left">
          <div className="text-white font-bold text-3xl md:text-4xl mb-2 pb-2">
            Contact Info
          </div>
          <div className="w-24 md:w-1/2 border-b-2 border-white mb-4"></div>
          <div className="text-lg md:text-xl text-white">
            <div className="flex justify-center lg:justify-start items-center mb-2">
              <img src={Phone} alt="Phone icon" className="w-6 h-6 mr-2" />
              <span>+63-912-755-4269</span>
            </div>
            <div className="flex justify-center lg:justify-start items-center mb-2">
              <img src={Email} alt="Email icon" className="w-6 h-6 mr-2" />
              <span>sample@philrice.org</span>
            </div>
            <div className="flex justify-center lg:justify-start items-center">
              <img
                src={Facebook}
                alt="Facebook icon"
                className="w-6 h-6 mr-2"
              />
              <span>DA-PhilRice Facebook Page</span>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <div className="text-white font-bold text-3xl md:text-4xl mb-2 pb-2">
            Useful Links
          </div>
          <div className="w-24 md:w-1/2 border-b-2 border-white mb-4"></div>
          <div className="grid grid-cols-2 gap-2 text-lg md:text-xl text-white text-start">
            <div>Home</div>
            <div>About</div>
            <div>Program</div>
            <div>Speaker</div>
            <div>Venue</div>
            <div>FAQs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
