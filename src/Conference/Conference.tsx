import React, { useState } from "react";
import LeafDivider from "../Assets/leafwhite.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/calendar.svg";
import Program1 from "./Programs/Program1";
import Program2 from "./Programs/Program2";
import Program3 from "./Programs/Program3";

export default function Conference() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const days = [
    { day: "Day 1", date: "December 3, 2024", program: <Program1 /> },
    { day: "Day 2", date: "December 4, 2024", program: <Program2 /> },
    { day: "Day 3", date: "December 5, 2024", program: <Program3 /> },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-[#0E9046] w-screen px-8 py-24">
      <div className="text-white text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
        Conference <span className="text-[#F3B71C]">Schedule</span>
      </div>
      <img
        src={LeafDivider}
        alt="Leaf Divider"
        className="my-4 transform transition-transform duration-300 hover:scale-110"
      />
      <div className="text-center text-white text-lg sm:text-xl w-full max-w-[866px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
        vulputate eros, et <br />
        faucibus velit. Donec sed elit tellus.
      </div>
      {/* Render the day buttons dynamically */}
      <div className="mt-12 w-11/12">
        {/* For Mobile and Tablet (use dropdown) */}
        <div className="block lg:hidden mb-4">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#EFB71E] text-white px-4 py-2 rounded-[10px] w-full flex justify-between items-start"
            >
              <div className="flex items-center justify-center">
                <MyIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
              </div>
              <div className="flex flex-col justify-start items-start absolute bottom-1 left-20">
                {days[activeIndex].day} <br />
                <div className="font-bold">{days[activeIndex].date}</div>
              </div>
              <span>{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute justify-center items-center text-center left-0 top-14 bg-gray-800 text-white w-full rounded-b-[10px] shadow-lg z-10">
                {days.map((dayItem, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 cursor-pointer ${
                      activeIndex === index ? "bg-[#EFB71E]" : ""
                    }`}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsDropdownOpen(false); // Close dropdown after selection
                    }}
                  >
                    {dayItem.day} - {dayItem.date}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* For Desktop (use flex row) */}
        <div className="hidden lg:flex flex-row justify-center items-center gap-4">
          {days.map((dayItem, index) => (
            <div
              key={index}
              className={`flex flex-row sm:px-[24px] lg:px-16 py-3 gap-4 rounded-[10px] hover:border-white hover:border-b hover:transition-all ease-in-out duration-100 ${
                activeIndex === index ? "bg-[#EFB71E]" : ""
              } cursor-pointer`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center justify-center">
                <MyIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
              </div>
              <div className="flex flex-col justify-center text-white">
                <div className="text-base sm:text-lg">{dayItem.day}</div>
                <div className="text-lg sm:text-xl font-bold">
                  {dayItem.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1108px] h-[2px] bg-white my-10" />
      <div className="text-white text-center text-[30px] md:text-[35px] lg:text-[40px] font-bold mb-4">
        Conference Program
      </div>
      {days[activeIndex].program}
    </div>
  );
}
