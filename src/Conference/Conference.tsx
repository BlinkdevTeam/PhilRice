import React, { useState } from "react";
import LeafDivider from "../Assets/leafwhite.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/calendar.svg";
import Program1 from "./Programs/Program1";
import Program2 from "./Programs/Program2";
import Program3 from "./Programs/Program3";

export default function Conference() {
  const [activeIndex, setActiveIndex] = useState(0);

  const days = [
    { day: "Day 1st", date: "November 26, 2024", program: <Program1 /> },
    { day: "Day 2nd", date: "November 27, 2024", program: <Program2 /> },
    { day: "Day 3rd", date: "November 28, 2024", program: <Program3 /> },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-[#0E9046] px-4 sm:px-[314px] py-[120px]">
      <div className="text-white text-4xl sm:text-6xl font-bold text-center">
        Conference <span className="text-[#F3B71C]">Schedule</span>
      </div>
      <img src={LeafDivider} alt="Leaf Divider" className="my-4" />
      <div className="text-center text-white text-lg sm:text-xl w-full max-w-[866px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
        vulputate eros, et <br />
        faucibus velit. Donec sed elit tellus.
      </div>

      {/* Render the day buttons dynamically */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-full max-w-[1100px]">
        {days.map((dayItem, index) => (
          <div
            key={index}
            className={`flex flex-row w-full sm:w-[356px] h-[72px] px-4 sm:px-[24px] gap-4 rounded-xl ${
              activeIndex === index ? "bg-[#EFB71E]" : ""
            } cursor-pointer`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="flex items-center justify-center">
              <MyIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
            </div>
            <div className="flex flex-col justify-center text-white">
              <div className="text-base sm:text-lg">{dayItem.day}</div>
              <div className="text-lg sm:text-xl font-bold">{dayItem.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1108px] h-[2px] bg-white my-10" />
      <div className="text-white text-3xl sm:text-4xl font-bold mb-4">
        Conference Program
      </div>

      {/* Render the active program */}
      {days[activeIndex].program}
    </div>
  );
}
