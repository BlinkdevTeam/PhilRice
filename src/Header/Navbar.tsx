import React, { useState } from "react";
import Logo from "../Assets/PhilsanLogoWhite.png";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = ({ refs }: any) => {
  const [activeButton, setActiveButton] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTabletMenuOpen, setTabletMenuOpen] = useState(false); // Added state for tablet
  const navigate = useNavigate(); // React Router's useNavigate

  const handleButtonClick = (ref: any, section: string) => {
    // Navigate to home and pass the section to scroll to
    navigate("/", { state: { section } });
    setActiveButton(section);
    setMobileMenuOpen(false);
    setTabletMenuOpen(false); // Close the tablet menu when an item is clicked
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTabletMenu = () => {
    setTabletMenuOpen(!isTabletMenuOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-[#0C6972] p-4 w-full fixed top-0 left-0 z-50 text-xs lg:text-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="PhilRice Logo"
            className="h-10 cursor-pointer"
            onClick={handleScrollToTop}
          />
        </div>

        <div className="flex items-center space-x-0 gap-8 ml-auto">
          {/* Register button, visible on both desktop and mobile */}
          <a
            href="https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI"
            className="bg-[#F3BD1C] text-white font-bold py-2 px-6 lg:px-12 rounded-md hidden"
          >
            REGISTER
          </a>

          {/* Mobile Menu Toggle Button (visible on small screens) */}
          <button
            className="sm:block md:hidden flex items-center"
            onClick={toggleMobileMenu}
          >
            <FaBars className="text-white text-3xl" />
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-0 bg-[#0C6972] w-full shadow-lg md:hidden">
              <div className="flex flex-col items-center">
                {/* Register button visible only in mobile menu */}
                <a
                  href="https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI"
                  className="bg-[#F3BD1C] text-white font-bold py-2 px-6 rounded-md mb-4"
                >
                  REGISTER
                </a>
                {/* Mobile Menu Links */}
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

          {/* Tablet Menu Toggle Button (visible on tablet screens) */}
          <button
            className="hidden md:block lg:hidden flex items-center"
            onClick={toggleTabletMenu}
          >
            <FaBars className="text-white text-3xl" />
          </button>

          {/* Tablet Menu */}
          {isTabletMenuOpen && (
            <div className="absolute top-16 right-0 bg-[#0C6972] w-full shadow-lg md:block lg:hidden">
              <div className="flex space-x-6 justify-center">
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

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 text-[16px]">
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
                  }`}
                >
                  {section.toUpperCase()}
                </button>
              )
            )}
          </div>

          {/* Register, QR button, visible only on desktop */}
          {/* <a
            href="https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI"
            className="bg-transparent border-solid border-[1px] text-white text-[16px] font-bold py-2 px-8 rounded-md hidden lg:block"
          >
            GENERATE QR CODE
          </a> */}
          <a
            href="https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI"
            className="bg-[#F3BD1C] text-white text-[16px] font-bold py-2 px-8 rounded-md hidden lg:block"
          >
            REGISTER
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
