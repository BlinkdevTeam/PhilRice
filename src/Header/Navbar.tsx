import React, { useState } from "react";
import Logo from "../Assets/PhilsanLogoWhite.png";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = ({ refs }: any) => {
  const [activeButton, setActiveButton] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // React Router's useNavigate

  const handleButtonClick = (ref: any, section: string) => {
    // Navigate to home and pass the section to scroll to
    navigate("/", { state: { section } });
    setActiveButton(section);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
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
          <a
            href="https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI"
            className="bg-[#F3BD1C] text-white font-bold py-2 px-6 lg:px-12 rounded-md block md:hidden"
          >
            REGISTER
          </a>
          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
          >
            <FaBars className="text-white text-3xl" />
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-0 bg-[#0C6972] w-full shadow-lg md:hidden">
              <div className="flex flex-col items-center">
                {/* Register button shown bottom in mobile menu */}
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
