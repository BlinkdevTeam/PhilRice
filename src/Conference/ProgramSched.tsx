import React, { useState } from "react";
import LeafDivider from "../Assets/leafwhite.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/calendar.svg";
import Program1 from "./Programs/Program1";
import Program2 from "./Programs/Program2";
import Program3 from "./Programs/Program3";

export default function ProgramSched() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null); // For accordion

  const days = [
    { day: "Day 1", date: "December 3, 2024", program: <Program1 /> },
    { day: "Day 2", date: "December 4, 2024", program: <Program2 /> },
    { day: "Day 3", date: "December 5, 2024", program: <Program3 /> },
    { day: "1 - 3", date: "December 3 - 5, 2024", program: <Program3 /> },
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
    <div className="flex flex-col justify-center items-center bg-[#0E9046] w-screen px-8 py-16 xl:py-24">
      <div className="text-white text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
        Conference <span className="text-[#F3B71C]">Schedule</span>
      </div>
      <img
        src={LeafDivider}
        alt="Leaf Divider"
        className="my-4 w-[90%] md:w-auto transform transition-transform duration-300 hover:scale-110"
      />
      <div className="text-center text-white text-lg sm:text-xl w-full max-w-[866px]">
        {/* Placeholder for subtitle */}
      </div>
      {/* Render the day buttons dynamically */}
      <div className="mt-12 w-full flex flex-col gap-4">
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

        {/* For Desktop (Tabs) */}
        <div className="flex flex-row justify-center item-center gap-4 w-full">
          <div className="flex flex-row w-full gap-4 justify-between">
            {days.map((dayItem, index) =>
              index !== 3 ? (
                <div
                  key={index}
                  className={`flex flex-row px-2 sm:px-[24px] lg:px-16 py-3 gap-4 rounded-[10px] hover:border-white hover:border-b hover:transition-all ease-in-out duration-100 ${
                    activeIndex === index ? "bg-[#EFB71E]" : "bg-[#EFB71E]"
                  } cursor-pointer`}
                  onClick={() => setActiveIndex(index)}>
                  <div className="hidden md:flex items-center justify-center">
                    <MyIcon className="w-4 h-4 sm:w-10 sm:h-10 text-blue-500" />
                  </div>
                  <div className="flex flex-col justify-center text-white">
                    <div className="text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px]">
                      {dayItem.day}
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px] font-bold">
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
                  className={`flex flex-row w-full px-2 sm:px-[24px] lg:px-16 py-3 gap-4 rounded-[10px] hover:border-white hover:border-b hover:transition-all ease-in-out duration-100 ${
                    activeIndex === index ? "bg-[#EFB71E]" : "bg-[#EFB71E]"
                  } cursor-pointer`}
                  onClick={() => setActiveIndex(index)}>
                  <div className="hidden md:flex items-center justify-center">
                    <MyIcon className="w-4 h-4 sm:w-10 sm:h-10 text-blue-500" />
                  </div>
                  <div className="flex flex-col md:flex-row justify-start items-start md:justify-center md:items-center md:gap-8 text-white">
                    <div className="text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px]">
                      {dayItem.day}
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px] font-bold">
                      {dayItem.date}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
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
