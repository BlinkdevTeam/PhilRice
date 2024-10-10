import React, { useState } from "react";
import LeafDivider from "../Assets/leafwhite.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/calendar.svg";

export default function Conference() {
  // Set Day 1 as the default active button by initializing activeIndex to 0
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: any) => {
    setActiveIndex(index); // Update the active index
  };

  return (
    <>
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
        <div className="flex flex-row gap-20">
          {/* Day 1 */}
          <div
            className={`w-[356px] h-[72px] flex flex-row ${
              activeIndex === 0 ? "bg-[#EFB71E]" : ""
            } cursor-pointer`}
            onClick={() => handleClick(0)} // Handle click for Day 1
          >
            <div className="flex items-center justify-center">
              <MyIcon className="w-10 h-10 text-blue-500" />
            </div>
            <div className="flex flex-col justify-center">
              <div>Day 1st</div>
              <div>November 26, 2024</div>
            </div>
          </div>

          {/* Day 2 */}
          <div
            className={`w-[356px] h-[72px] flex flex-row ${
              activeIndex === 1 ? "bg-[#EFB71E]" : ""
            } cursor-pointer`}
            onClick={() => handleClick(1)} // Handle click for Day 2
          >
            <div className="flex items-center justify-center">
              <MyIcon className="w-10 h-10 text-blue-500" />
            </div>
            <div className="flex flex-col justify-center">
              <div>Day 2nd</div>
              <div>November 27, 2024</div>
            </div>
          </div>

          {/* Day 3 */}
          <div
            className={`w-[356px] h-[72px] flex flex-row ${
              activeIndex === 2 ? "bg-[#EFB71E]" : ""
            } cursor-pointer`}
            onClick={() => handleClick(2)} // Handle click for Day 3
          >
            <div className="flex items-center justify-center">
              <MyIcon className="w-10 h-10 text-blue-500" />
            </div>
            <div className="flex flex-col justify-center">
              <div>Day 3rd</div>
              <div>November 28, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
