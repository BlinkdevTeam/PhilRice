import React, { useState } from "react";
import Logo from "../Assets/PhilsanLogoWhite.png";

const Navbar = ({ scrollToSection, refs }: any) => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState("home");

  // Function to handle button click and update the active state
  const handleButtonClick = (ref: any, section: string) => {
    scrollToSection(ref);
    setActiveButton(section); // Update the active button
  };

  return (
    <nav className="bg-green-700 p-4 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="PhilRice Logo" className="h-10" />
        </div>

        {/* Right side - Nav Links and Register button */}
        <div className="flex items-center space-x-8 ml-auto">
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleButtonClick(refs.homeRef, "home")}
              className={`${
                activeButton === "home"
                  ? "text-[#F3B71C] font-bold"
                  : "text-white"
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => handleButtonClick(refs.aboutRef, "about")}
              className={`${
                activeButton === "about"
                  ? "text-[#F3B71C] font-bold"
                  : "text-white"
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => handleButtonClick(refs.speakerRef, "speakers")}
              className={`${
                activeButton === "speakers"
                  ? "text-[#F3B71C] font-bold"
                  : "text-white"
              }`}
            >
              SPEAKERS
            </button>
            <button
              onClick={() => handleButtonClick(refs.conferenceRef, "program")}
              className={`${
                activeButton === "program"
                  ? "text-[#F3B71C] font-bold"
                  : "text-white"
              }`}
            >
              PROGRAM
            </button>
            <button
              onClick={() => handleButtonClick(refs.locationRef, "venue")}
              className={`${
                activeButton === "venue"
                  ? "text-[#F3B71C] font-bold"
                  : "text-white"
              }`}
            >
              VENUE
            </button>
            <button
              onClick={() => handleButtonClick(refs.faqRef, "faqs")}
              className={`${
                activeButton === "faqs"
                  ? "text-[#F3B71C] font-bold"
                  : "text-white"
              }`}
            >
              FAQS
            </button>
          </div>

          {/* Register button */}
          <a
            href="https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI"
            className="bg-yellow-400 text-green-700 font-bold py-2 px-4 rounded-md"
          >
            REGISTER
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
