import React, { useState } from "react";
import Logo from "../Assets/PhilsanLogoWhite.png";

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
    <nav className="bg-green-700 p-4 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="PhilRice Logo" className="h-10" />
        </div>

        {/* Right side - Register button and Hamburger Button for mobile view */}
        <div className="flex items-center space-x-8 ml-auto">
          {/* Register button moved above Hamburger menu */}
          <a
            href="https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI"
            className="bg-yellow-400 text-green-700 font-bold py-2 px-4 rounded-md md:block"
          >
            REGISTER
          </a>

          {/* Hamburger Button for mobile view */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-0 bg-green-700 w-full shadow-lg md:hidden">
              <div className="flex flex-col items-center">
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
          <div className="hidden md:flex space-x-8">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
