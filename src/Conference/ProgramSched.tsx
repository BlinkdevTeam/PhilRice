import React, { useState } from "react";
import LeafDivider from "../Assets/leafwhite.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/calendar.svg";
import Program1 from "./Programs/Program1";
import Program2 from "./Programs/Program2";
import Program3 from "./Programs/Program3";
import ProgramSum from "./Programs/ProgramSum";

export default function ProgramSched() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null); // For accordion

  const days = [
    { day: "Day 1", date: "Dec 3, 2024", program: <Program1 /> },
    { day: "Day 2", date: "Dec 4, 2024", program: <Program2 /> },
    { day: "Day 3", date: "Dec 5, 2024", program: <Program3 /> },
    { day: "Day 1 - 3", date: "Dec 3 - 5, 2024", program: <ProgramSum /> },
  ];
  const mobiledays = [
    { day: "Day 1", date: "December 3, 2024", program: <Program1 /> },
    { day: "Day 2", date: "December 4, 2024", program: <Program2 /> },
    { day: "Day 3", date: "December 5, 2024", program: <Program3 /> },
  ];
  const belowmobiledays = [
    { day: "Day 1 - 3", date: "December 3 - 5, 2024", program: <Program3 /> },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#0E9046] w-screen px-4 py-16 xl:py-24">
      <div className="text-white text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
        Conference <span className="text-[#F3B71C]">Schedule</span>
      </div>
      <img
        src={LeafDivider}
        alt="Leaf Divider"
        className="my-6 w-[80%] md:w-auto transform transition-transform duration-300 hover:scale-110"
      />
      <div className="text-center text-white text-lg sm:text-xl w-full max-w-[866px]">
        {/* Placeholder for subtitle */}
      </div>
      {/* Render the day buttons dynamically */}
      <div className="mt-12 w-full flex flex-col justify-center items-center gap-4">
        {/* For Mobile and Tablet (Accordion) */}
        {/* <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="flex flex-col lg:hidden gap-8">
          {mobiledays.map((mobiledayItem, index) => (
            <div key={index}>
              <h2 id={`accordion-collapse-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 px-3 md:px-10 font-medium text-white border border-[#EFB71E] bg-[#EFB71E] rounded-lg"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-collapse-body-${index}`}>
                  <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:gap-16">
                    <span>{mobiledayItem.day}</span>
                    <span>{mobiledayItem.date}</span>
                  </div>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transform shrink-0 ${
                      openIndex === index ? "" : "rotate-180"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${index}`}
                className={`${openIndex === index ? "" : "hidden"} p-5 `}
                aria-labelledby={`accordion-collapse-heading-${index}`}>
                <div className="text-gray-500 dark:text-gray-400">
                  {mobiledayItem.program}
                </div>
              </div>
            </div>
          ))}
        </div> */}
        {/*MOBILE REV*/}
        <div className="flex flex-col xl:hidden justify-center item-center gap-2 w-[70%]">
          <div className="flex flex-row w-full gap-[5px] justify-between">
            {days.map((dayItem, index) =>
              index !== 3 ? (
                <div
                  key={index}
                  className={`flex flex-row justify-center item-center w-[100%] px-2 sm:px-[24px] lg:px-4 py-3 gap-[10px] lg:gap-4 rounded-[5px] hover:border-white hover:border-b hover:transition-all ease-in-out duration-100 ${
                    activeIndex === index ? "bg-[#EFB71E]" : "bg-[#EFB71E]"
                  } cursor-pointer`}
                  onClick={() => setActiveIndex(index)}>
                  {/* <div className="flex items-center justify-center">
                    <MyIcon className="w-4 h-4 sm:w-10 sm:h-10 text-blue-500" />
                  </div> */}
                  <div className="flex flex-col justify-center text-white">
                    {/* <div className="text-[9px] sm:text-[10px] md:text-[12px] lg:text-[16px]">
                      {dayItem.day}
                    </div> */}
                    <div className="flex text-[9px] sm:text-[11px] md:text-[16px] lg:text-[18px] font-bold">
                      {dayItem.date}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className="flex w-full">
            {days.map((dayItem, index) =>
              index === 3 ? (
                <div
                  key={index}
                  className={`flex flex-row justify-center items-center w-full px-2 sm:px-[24px] lg:px-16 py-3 gap-4 rounded-[5px] hover:border-white hover:border-b hover:transition-all ease-in-out duration-100 ${
                    activeIndex === index ? "bg-white" : "bg-white"
                  } cursor-pointer`}
                  onClick={() => setActiveIndex(index)}>
                  {/* <div className="flex items-center justify-center">
                    <MyIcon className="w-4 h-4 sm:w-10 sm:h-10 text-blue-500" />
                  </div> */}
                  <div className="flex flex-col md:flex-row justify-center items-start md:justify-center md:items-center md:gap-8 text-white">
                    {/* <div className="text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px]">
                      {dayItem.day}
                    </div> */}
                    <div
                      className={`flex text-[9px] sm:text-[11px] md:text-[16px] lg:text-[18px] font-bold ${
                        index === 3 ? "text-[#0E9046]" : "text-white"
                      }`}>
                      {dayItem.date}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* For Desktop (Tabs) */}
        <div className="hidden xl:flex xl:flex-row justify-center item-center gap-2 w-[70%]">
          <div className="flex flex-row w-full gap-[5px] justify-between">
            {days.map((dayItem, index) => (
              <div
                key={index}
                className={`flex flex-row w-[100%] px-2 sm:px-[24px] lg:px-4 py-2 gap-[10px] lg:gap-4 rounded-[5px] hover:border-white hover:border-b hover:transition-all ease-in-out duration-100 ${
                  index === 3
                    ? "bg-white"
                    : // ? "bg-[#F4CC5E]"
                    activeIndex === index
                    ? "bg-[#EFB71E]"
                    : "bg-[#EFB71E]"
                } cursor-pointer`}
                onClick={() => setActiveIndex(index)}>
                <div className="flex items-center justify-center">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index === 3 ? "#0E9046" : "white"} // Dynamically set the fill color
                  >
                    <path d="M21.0013 1.56738H18.8072V0.783689C18.8072 0.313431 18.4938 0 18.0235 0C17.5533 0 17.2399 0.313436 17.2399 0.783689V1.56738H7.83627V0.783689C7.83627 0.313431 7.52283 0 7.05258 0C6.58233 0 6.26889 0.313436 6.26889 0.783689V1.56738H4.07483C1.80227 1.56738 0 3.44798 0 5.64221V20.9229C0 23.1955 1.88061 24.9977 4.07483 24.9977H20.9228C23.1954 24.9977 24.9976 23.1171 24.9976 20.9229V5.64221C25.0761 3.44793 23.1955 1.56738 21.0013 1.56738ZM4.07495 3.13453H6.269V4.23167C5.3287 4.54511 4.70185 5.40709 4.70185 6.42573C4.70185 7.75777 5.72043 8.77657 7.05269 8.77657C8.38473 8.77657 9.40353 7.75799 9.40353 6.42573C9.40353 5.40715 8.77668 4.54512 7.83638 4.23167V3.13453H17.24V4.23167C16.2997 4.54511 15.6728 5.40709 15.6728 6.42573C15.6728 7.75777 16.6914 8.77657 18.0237 8.77657C19.3557 8.77657 20.3745 7.75799 20.3745 6.42573C20.3745 5.40715 19.7477 4.54512 18.8073 4.23167L18.8071 3.13453H21.0012C22.4117 3.13453 23.5086 4.30995 23.5086 5.64198V9.40342H1.56749V5.64198C1.56771 4.30995 2.74314 3.13453 4.07517 3.13453H4.07495ZM7.05269 5.64198C7.52295 5.64198 7.83638 5.95542 7.83638 6.42567C7.83638 6.89593 7.52295 7.20936 7.05269 7.20936C6.58244 7.20936 6.269 6.89593 6.269 6.42567C6.269 5.95542 6.58266 5.64198 7.05269 5.64198ZM18.0235 5.64198C18.4938 5.64198 18.8072 5.95542 18.8072 6.42567C18.8072 6.89593 18.4938 7.20936 18.0235 7.20936C17.5533 7.20936 17.2399 6.89593 17.2399 6.42567C17.2399 5.95542 17.5535 5.64198 18.0235 5.64198ZM21.0013 23.5085H4.15334C2.7428 23.5085 1.64588 22.333 1.64588 21.001V10.9703H23.587V21.0005C23.5087 22.3327 22.3333 23.5081 21.001 23.5081L21.0013 23.5085Z" />
                    <path d="M10.6575 13.3215H9.87378C9.40352 13.3215 9.09009 13.635 9.09009 14.1052C9.09009 14.5755 9.40352 14.8889 9.87378 14.8889H10.6575C11.1277 14.8889 11.4412 14.5755 11.4412 14.1052C11.4412 13.635 11.0494 13.3215 10.6575 13.3215Z" />
                    <path d="M15.2026 13.3215H14.4189C13.9487 13.3215 13.6353 13.635 13.6353 14.1052C13.6353 14.5755 13.9487 14.8889 14.4189 14.8889H15.2026C15.6729 14.8889 15.9863 14.5755 15.9863 14.1052C15.9861 13.635 15.5944 13.3215 15.2026 13.3215Z" />
                    <path d="M6.11254 13.3215H5.32885C4.8586 13.3215 4.54517 13.635 4.54517 14.1052C4.54517 14.5755 4.8586 14.8889 5.32885 14.8889H6.11254C6.5828 14.8889 6.89623 14.5755 6.89623 14.1052C6.89623 13.635 6.50428 13.3215 6.11254 13.3215Z" />
                    <path d="M19.7478 13.3215H18.9641C18.4939 13.3215 18.1804 13.635 18.1804 14.1052C18.1804 14.5755 18.4939 14.8889 18.9641 14.8889H19.7478C20.2181 14.8889 20.5315 14.5755 20.5315 14.1052C20.5315 13.635 20.1395 13.3215 19.7478 13.3215Z" />
                    <path d="M6.11254 16.4561H5.32885C4.8586 16.4561 4.54517 16.7695 4.54517 17.2397C4.54517 17.71 4.8586 18.0234 5.32885 18.0234H6.11254C6.5828 18.0234 6.89623 17.71 6.89623 17.2397C6.89623 16.7695 6.50428 16.4561 6.11254 16.4561Z" />
                    <path d="M10.6575 16.4561H9.87378C9.40352 16.4561 9.09009 16.7695 9.09009 17.2397C9.09009 17.71 9.40352 18.0234 9.87378 18.0234H10.6575C11.1277 18.0234 11.4412 17.71 11.4412 17.2397C11.4412 16.7695 11.0494 16.4561 10.6575 16.4561Z" />
                    <path d="M19.7478 16.4561H18.9641C18.4939 16.4561 18.1804 16.7695 18.1804 17.2397C18.1804 17.71 18.4939 18.0234 18.9641 18.0234H19.7478C20.2181 18.0234 20.5315 17.71 20.5315 17.2397C20.5315 16.7695 20.1395 16.4561 19.7478 16.4561Z" />
                    <path d="M15.2026 16.4561H14.4189C13.9487 16.4561 13.6353 16.7695 13.6353 17.2397C13.6353 17.71 13.9487 18.0234 14.4189 18.0234H15.2026C15.6729 18.0234 15.9863 17.71 15.9863 17.2397C15.9861 16.7695 15.5944 16.4561 15.2026 16.4561Z" />
                    <path d="M15.2026 19.5906H14.4189C13.9487 19.5906 13.6353 19.904 13.6353 20.3743C13.6353 20.8445 13.9487 21.158 14.4189 21.158H15.2026C15.6729 21.158 15.9863 20.8445 15.9863 20.3743C15.9861 19.904 15.5944 19.5906 15.2026 19.5906Z" />
                    <path d="M19.7478 19.5906H18.9641C18.4939 19.5906 18.1804 19.904 18.1804 20.3743C18.1804 20.8445 18.4939 21.158 18.9641 21.158H19.7478C20.2181 21.158 20.5315 20.8445 20.5315 20.3743C20.5315 19.904 20.1395 19.5906 19.7478 19.5906Z" />
                    <path d="M10.6575 19.5906H9.87378C9.40352 19.5906 9.09009 19.904 9.09009 20.3743C9.09009 20.8445 9.40352 21.158 9.87378 21.158H10.6575C11.1277 21.158 11.4412 20.8445 11.4412 20.3743C11.4412 19.904 11.0494 19.5906 10.6575 19.5906Z" />
                    <path d="M6.11254 19.5906H5.32885C4.8586 19.5906 4.54517 19.904 4.54517 20.3743C4.54517 20.8445 4.8586 21.158 5.32885 21.158H6.11254C6.5828 21.158 6.89623 20.8445 6.89623 20.3743C6.89623 19.904 6.50428 19.5906 6.11254 19.5906Z" />
                    {/* Add other <path> elements here */}
                  </svg>
                </div>
                <div className="flex flex-col justify-center text-white">
                  <div
                    key={index}
                    className={`text-[9px] sm:text-[10px] md:text-[12px] lg:text-[16px] ${
                      index === 3 ? "text-[#0E9046]" : "text-white"
                    }`}>
                    {dayItem.day}
                  </div>
                  <div
                    className={`flex text-[9px] sm:text-[10px] md:text-[12px] lg:text-[18px] font-bold ${
                      index === 3 ? "text-[#0E9046]" : "text-white"
                    }`}>
                    {dayItem.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex w-5/12">
            {days.map((dayItem, index) =>
              index === 3 ? (
                <div
                  key={index}
                  className={`flex flex-row w-full px-2 sm:px-[24px] lg:px-16 py-3 gap-4 rounded-[10px] hover:border-white hover:border-b hover:transition-all ease-in-out duration-100 ${
                    activeIndex === index ? "bg-[#EFB71E]" : "bg-[#EFB71E]"
                  } cursor-pointer`}
                  onClick={() => setActiveIndex(index)}>
                  <div className="flex items-center justify-center">
                    <MyIcon className="w-4 h-4 sm:w-10 sm:h-10 text-blue-500" />
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-start md:justify-center md:items-center md:gap-8 text-white">
                    <div className="text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px]">
                      {dayItem.day}
                    </div>
                    <div className="hidden lg:flex text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px] font-bold">
                      {dayItem.date}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div> */}
        </div>
      </div>
      <div className="flex w-full max-w-[1108px] h-[2px] bg-white my-10" />
      <div className="flex text-white text-center text-[30px] md:text-[35px] lg:text-[40px] font-bold mb-4">
        Conference Program
      </div>
      <div className="flex">{days[activeIndex].program}</div>
    </div>
  );
}
