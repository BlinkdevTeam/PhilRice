import React, { useState } from "react";
import Logo from "../Assets/FooterLogoBW.png";
import LogoHover from "../Assets/FooterLogoColored.png";

interface FooterProps {
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    programRef: React.RefObject<HTMLDivElement>;
    speakersRef: React.RefObject<HTMLDivElement>;
    venueRef: React.RefObject<HTMLDivElement>;
    faqsRef: React.RefObject<HTMLDivElement>;
    stratplanRef: React.RefObject<HTMLDivElement>;
  };
}

export default function Footer({ refs }: FooterProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This adds a smooth scrolling animation
    });
  };

  const phoneNumber = "0917 111 7423";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy phone number:", err);
      });
  };

  const emailAddress = "prri.mail@mail.philrice.gov.ph";

  const facebookUrl = "https://www.facebook.com/DAPhilRice";

  return (
    <>
      <div className="stick bottom-0 left-0">
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
                <div className="w-24 md:w-1/2 border-b-2 border-white mb-4"></div>
              </div>

              <div className="text-white text-[15px] md:text-[22px]">
                <div
                  className="flex mb-2 gap-4 cursor-pointer"
                  onClick={copyToClipboard}>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                    <path
                      d="M22.1667 9.66699H13.8334C12.9129 9.66699 12.1667 10.4132 12.1667 11.3337V24.667C12.1667 25.5875 12.9129 26.3337 13.8334 26.3337H22.1667C23.0872 26.3337 23.8334 25.5875 23.8334 24.667V11.3337C23.8334 10.4132 23.0872 9.66699 22.1667 9.66699Z"
                      stroke="#0C6972"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 23H18.0083"
                      stroke="#0C6972"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{phoneNumber}</span>
                </div>
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex mb-2 gap-4 cursor-pointer">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                    <g clipPath="url(#clip0_8_1256)">
                      <path
                        d="M25.5 10.5L17.25 18.75"
                        stroke="#0C6972"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.5 10.5L20.25 25.5L17.25 18.75L10.5 15.75L25.5 10.5Z"
                        stroke="#0C6972"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                  <span>{emailAddress}</span>
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 cursor-pointer">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                    <path
                      d="M23 8H20C18.6739 8 17.4021 8.52678 16.4645 9.46447C15.5268 10.4021 15 11.6739 15 13V16H12V20H15V28H19V20H22L23 16H19V13C19 12.7348 19.1054 12.4804 19.2929 12.2929C19.4804 12.1054 19.7348 12 20 12H23V8Z"
                      stroke="#0C6972"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>DA-PhilRice</span>
                </a>
              </div>
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-[18px] md:text-[35px] ">
                Useful Links
                <div className="w-24 md:w-1/2 border-b-2 border-white"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 grid-rows-2 p-4 gap-x-28 gap-y-2 text-[15px] md:text-[22px] text-white text-start">
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    refs.homeRef.current?.scrollIntoView({ behavior: "smooth" })
                  }>
                  Home
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    refs.programRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }>
                  Program
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    refs.aboutRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }>
                  About
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    refs.venueRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }>
                  Venue
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    refs.speakersRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }>
                  Speaker
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    refs.faqsRef.current?.scrollIntoView({ behavior: "smooth" })
                  }>
                  FAQs
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 grid-rows-1 px-4 text-[15px] md:text-[22px] text-white text-start">
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    refs.stratplanRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }>
                  Strategic Plan
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="border-white border-2 rounded-full flex justify-center items-center w-[33px] h-[33px] md:w-[53px] md:h-[53px] lg:w-[56px] lg:h-[56px] p-2 absolute top-[60%] right-5 md:top-[65%] md:right-5 lg:top-32 lg:right-10 cursor-pointer"
            onClick={handleScrollToTop}
          >
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 13.2858L13 1.66797L25 13.2858"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-white text-center w-full h-[66px] md:h-[108px] lg:h-[58px] text-[13px] md:text-[22px] px-4 bg-[#343434]">
          <div>PHILRICE © 2024. All rights reserved.</div>
          <div>
            Powered by <span className="font-bold">BLINK</span> CREATIVE STUDIO
          </div>
        </div>
      </div>
    </>
  );
}
