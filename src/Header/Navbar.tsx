import React, { useState } from "react";
import Logo from "../Assets/PhilsanLogoWhite.png";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = ({ refs }: any) => {
  const [activeButton, setActiveButton] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTabletMenuOpen, setTabletMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (ref: any, section: string) => {
    navigate("/", { state: { section } });
    setActiveButton(section);
    setMobileMenuOpen(false);
    setTabletMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTabletMenu = () => {
    setTabletMenuOpen(!isTabletMenuOpen);
  };

  const handleCloseMenu = () => {
    setTabletMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttons = ["GENERATE QR CODE", "REGISTER"];

  const handleSeeMore = () => {
    navigate("/qr-code-generator", { state: { section: "qrgenerator" } });
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
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"
                onClick={handleCloseMenu}
              />
              <div className="absolute top-0 left-0 w-[60%] h-screen bg-[#0E9046] shadow-lg md:block lg:hidden transition-transform ease-in-out duration-300">
                <div className="flex flex-col justify-start items-start p-4">
                  <img
                    src={Logo}
                    alt="tablet logo"
                    className="h-10 cursor-pointer"
                  />
                  <div className="w-full h-[1px] bg-white my-5" />
                  {[
                    "home",
                    "about",
                    "speakers",
                    "program",
                    "venue",
                    "faqs",
                  ].map((section) => (
                    <button
                      key={section}
                      onClick={() =>
                        handleButtonClick(refs[`${section}Ref`], section)
                      }
                      className={`${
                        activeButton === section
                          ? "text-[#F3B71C] font-bold text-[14px] py-4"
                          : "text-white text-[14px] font-bold py-4"
                      } py-2 px-4`}
                    >
                      {section.toUpperCase()}
                    </button>
                  ))}
                  <div className="w-full h-[1px] bg-white my-5" />
                </div>
                <div className="flex flex-col justify-center items-center px-4 gap-4 font-bold text-[14px]">
                  {buttons.map((label, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (label === "REGISTER") {
                          window.location.href =
                            "https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI";
                        } else {
                          handleSeeMore();
                        }
                        handleCloseMenu();
                      }}
                      className={`w-full border-solid border-[2px] p-3 text-white rounded-md ${
                        label === "REGISTER"
                          ? "bg-[#EFB71E] border-[#EFB71E]"
                          : "bg-transparent"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tablet Menu Toggle Button (visible on tablet screens) */}
          <button
            className="hidden md:block lg:hidden items-center"
            onClick={toggleTabletMenu}
          >
            <FaBars className="text-white text-3xl" />
          </button>

          {/* Tablet Menu */}
          {isTabletMenuOpen && (
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"
                onClick={handleCloseMenu}
              />
              <div className="absolute top-0 left-0 w-[50%] h-screen bg-[#0E9046] shadow-lg md:block lg:hidden transition-transform ease-in-out duration-300">
                <div className="flex flex-col justify-start items-start p-4">
                  <img
                    src={Logo}
                    alt="tablet logo"
                    className="h-10 cursor-pointer"
                  />
                  <div className="w-full h-[1px] bg-white my-5" />
                  {[
                    "home",
                    "about",
                    "speakers",
                    "program",
                    "venue",
                    "faqs",
                  ].map((section) => (
                    <button
                      key={section}
                      onClick={() =>
                        handleButtonClick(refs[`${section}Ref`], section)
                      }
                      className={`${
                        activeButton === section
                          ? "text-[#F3B71C] font-bold text-[16px] py-4"
                          : "text-white text-[16px] font-bold py-4"
                      } py-2 px-4`}
                    >
                      {section.toUpperCase()}
                    </button>
                  ))}
                  <div className="w-full h-[1px] bg-white my-5" />
                </div>
                <div className="flex flex-col justify-center items-center px-4 gap-4 font-bold text-[16px]">
                  {buttons.map((label, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (label === "REGISTER") {
                          window.location.href =
                            "https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI";
                        } else {
                          handleSeeMore();
                        }
                        handleCloseMenu();
                      }}
                      className={`w-full border-solid border-[2px] p-3 text-white rounded-md ${
                        label === "REGISTER"
                          ? "bg-[#EFB71E] border-[#EFB71E]"
                          : "bg-transparent"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
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
