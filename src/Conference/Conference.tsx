import React, { useState } from "react";
import LeafDivider from "../Assets/leafwhite.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/calendar.svg";
import Program1 from "./Programs/Program1";
import Program2 from "./Programs/Program2";
import Program3 from "./Programs/Program3";

export default function Conference() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Data for the conference days and corresponding programs
  const days = [
    { day: "Day 1st", date: "November 26, 2024", program: <Program1 /> },
    { day: "Day 2nd", date: "November 27, 2024", program: <Program2 /> },
    { day: "Day 3rd", date: "November 28, 2024", program: <Program3 /> },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-[#0E9046]">
      <div className="text-white">
        Conference <span className="text-[#F3B71C]">Schedule</span>
      </div>
      <img src={LeafDivider} alt="Leaf Divider" />
      <div className="text-center w-[866px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
        vulputate eros, et <br />
        faucibus velit. Donec sed elit tellus.
      </div>

      {/* Render the day buttons dynamically */}
      <div className="flex flex-row gap-20">
        {days.map((dayItem, index) => (
          <div
            key={index}
            className={`w-[356px] h-[72px] flex flex-row ${
              activeIndex === index ? "bg-[#EFB71E]" : ""
            } cursor-pointer`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="flex items-center justify-center">
              <MyIcon className="w-10 h-10 text-blue-500" />
            </div>
            <div className="flex flex-col justify-center">
              <div>{dayItem.day}</div>
              <div>{dayItem.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[1108px] h-[2px] bg-white my-10" />
      <div className="text-white text-xl mb-4">Conference Program</div>

      {/* Render the active program */}
      {days[activeIndex].program}
    </div>
  );
}
