import React, { useState } from "react";
import Logo from "../Assets/FooterLogoBW.png";
import LogoHover from "../Assets/FooterLogoColored.png";
import Phone from "../Assets/Icons/phone.svg";
import Email from "../Assets/Icons/email.svg";
import Facebook from "../Assets/Icons/facebook.svg";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-24 justify-center w-screen bg-[#0C6972] px-4 md:px-8 lg:px-16 xl:px-32 py-12 relative">
      {/* Logo Section */}
      <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mt-[0px] flex justify-center lg:block">
        <img
          src={isHovered ? LogoHover : Logo}
          alt="PhilRice logo"
          className="w-full max-w-full lg:max-w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      {/* Contact Info and Useful Links Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-48 mb-8 lg:mb-0 lg:mt-[80px]">
        <div className="text-left">
          <div className="text-white font-bold text-[18px] md:text-[35px] mb-2 relative">
            Contact Info
            {/* <span className="absolute left-1/4 bottom-0 w-1/2 h-[3px] bg-white mt-4"></span> */}
            <div className="w-24 md:w-1/2 border-b-2 border-white mb-4"></div>
          </div>

          <div className="text-white text-[15px] md:text-[22px]">
            <div className="flex mb-2 gap-4">
              {/* <img src={Phone} alt="Phone icon" className="w-6 h-6 mr-2" /> */}
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                <path
                  d="M22.1667 9.66699H13.8334C12.9129 9.66699 12.1667 10.4132 12.1667 11.3337V24.667C12.1667 25.5875 12.9129 26.3337 13.8334 26.3337H22.1667C23.0872 26.3337 23.8334 25.5875 23.8334 24.667V11.3337C23.8334 10.4132 23.0872 9.66699 22.1667 9.66699Z"
                  stroke="#0C6972"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 23H18.0083"
                  stroke="#0C6972"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>+63-912-755-4269</span>
            </div>
            <div className="flex mb-2 gap-4">
              {/* <img src={Email} alt="Email icon" className="w-6 h-6 mr-2" /> */}
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                <g clip-path="url(#clip0_8_1256)">
                  <path
                    d="M25.5 10.5L17.25 18.75"
                    stroke="#0C6972"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.5 10.5L20.25 25.5L17.25 18.75L10.5 15.75L25.5 10.5Z"
                    stroke="#0C6972"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_1256">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(9 9)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>sample@philrice.org</span>
            </div>
            <div className="flex gap-4">
              {/* <img
                src={Facebook}
                alt="Facebook icon"
                className="w-6 h-6 mr-2"
              /> */}
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                <path
                  d="M23 8H20C18.6739 8 17.4021 8.52678 16.4645 9.46447C15.5268 10.4021 15 11.6739 15 13V16H12V20H15V28H19V20H22L23 16H19V13C19 12.7348 19.1054 12.4804 19.2929 12.2929C19.4804 12.1054 19.7348 12 20 12H23V8Z"
                  stroke="#0C6972"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>DA-PhilRice Facebook Page</span>
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className="text-white font-bold text-[18px] md:text-[35px] ">
            Useful Links
            <div className="w-24 md:w-1/2 border-b-2 border-white"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 grid-rows-2 p-4 gap-x-28 gap-y-2 text-[15px] md:text-[22px] text-white text-start">
            <div>Home</div>
            <div>About</div>
            <div>Program</div>
            <div>Speaker</div>
            <div>Venue</div>
            <div>FAQs</div>
          </div>
        </div>
      </div>
      <div className="border-white border-2 rounded-full flex justify-center items-center w-[33px] h-[33px] md:w-[53px] md:h-[53px] lg:w-[56px] lg:h-[56px] p-2 absolute top-80 right-5 md:top-80 md:right-5 lg:top-10 lg:right-10">
        <svg
          width="26"
          height="28"
          viewBox="0 0 26 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 26.8425V2.63867"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 13.2858L13 1.66797L25 13.2858"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
