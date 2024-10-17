import React, { useState } from "react";
import Logo from "../Assets/PhilsanLogoWhite.png";
import { FaBars } from "react-icons/fa6";

const Navbar = ({ scrollToSection, refs }: any) => {
  // State to track the active button and mobile menu visibility
  const [activeButton, setActiveButton] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle button click and update the active state
  const handleButtonClick = (ref: any, section: any) => {
    scrollToSection(ref);
    setActiveButton(section);
    setMobileMenuOpen(false); // Close mobile menu after selection
  };

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#0E9046] p-4 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="PhilRice Logo" className="h-10" />
        </div>

        {/* Right side - Register button and Hamburger Button for mobile view */}
        <div className="flex items-center space-x-0 gap-8 ml-auto">
          {/* Register button - visible in both mobile and desktop */}
          {/* <a
            href="https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI"
            className="bg-[#F3BD1C] text-white font-bold py-2 px-12 rounded-md block md:hidden"
          >
            REGISTER
          </a> */}

          {/* Hamburger Button for mobile view */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
          >
            <FaBars className="text-white text-3xl" />
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-0 bg-[#0E9046] w-full shadow-lg md:hidden">
              <div className="flex flex-col items-center">
                {/* Register button shown first in mobile menu */}
                <a
                  href="https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI"
                  className="bg-[#F3BD1C] text-white font-bold py-2 px-12 rounded-md mb-4"
                >
                  REGISTER
                </a>
                {["home", "about", "speakers", "program", "venue", "faqs"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() =>
                        handleButtonClick(refs[`${section}Ref`], section)
                      }
                      className={`${
                        activeButton === section
                          ? "text-[#F3B71C] font-bold"
                          : "text-white"
                      } py-2 px-4`}
                    >
                      {section.toUpperCase()}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-4">
            {["home", "about", "speaker", "conference", "location", "faq"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() =>
                    handleButtonClick(refs[`${section}Ref`], section)
                  }
                  className={`${
                    activeButton === section
                      ? "text-[#F3B71C] font-bold"
                      : "text-white"
                  }`}
                >
                  {section.toUpperCase()}
                </button>
              )
            )}
          </div>

          {/* Register button visible in desktop menu */}
          <a
            href="https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI"
            className="bg-[#F3BD1C] text-white font-bold py-2 px-12 rounded-md hidden md:block"
          >
            REGISTER
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
