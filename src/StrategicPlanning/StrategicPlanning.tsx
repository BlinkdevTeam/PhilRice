import React from "react";
import LeafDivider2 from "../Assets/leaf2.png";
import Book from "../Assets/samplebook.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/download.svg";

export default function StratPlan() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <div className="flex flex-col gap-10 sm:flex-row justify-center items-center md:justify-center md:items-start overflow-hidden w-full p-4">
        <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold inline sm:hidden">
          Strategic <span className="text-[#F3B71C]">Planning</span>
        </div>
        <div className="text-[#878787] font-bold text-[18px] md:text-[20px] lg:text-[25px] justify-start items-start inline sm:hidden">
          by: Jayson San Agustin & Lander Guevarra
        </div>
        <div className="shadow-left">
          <img src={Book} alt="book" className="max-w-full h-auto" />
        </div>
        <div className="flex flex-col">
          <div className="w-full max-w-[1005px]">
            <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold hidden sm:inline">
              Strategic <span className="text-[#F3B71C]">Planning</span>
            </div>
            {/* <img src={LeafDivider2} alt="Divider" className="my-4" /> */}
            <div className="text-[#878787] font-bold text-[18px] md:text-[20px] lg:text-[25px] hidden sm:flex">
              by: Jayson San Agustin & Lander Guevarra
            </div>
          </div>
          <div className="w-full max-w-[1005px] order-last sm:order-none mt-4 sm:mt-0">
            <div className="text-[18px] md:text-[20px] lg:text-[25px] my-4 leading-relaxed font-bold text-[#0E9046]">
              About the Book
            </div>
            <div className="text-[13px] md:text-[18px] lg:text-[22px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Ultrices nibh rhoncus
              viverra diam adipiscing. Dui in pharetra sed porttitor justo
              fermentum sapien mattis consequat. Dolor tellus nunc commodo
              lectus neque. Scelerisque tempus tristique phasellus pretium
              pulvinar magna risus pretium feugiat. Sed amet sit morbi
              suspendisse id felis. Senectus egestas cursus curabitur netus.{" "}
              <br /> <br />
              At ullamcorper in interdum dignissim ut eros erat sed maecenas. In
              maecenas nullam tellus tellus. Ullamcorper risus tellus et euismod
              massa. Consectetur massa tristique eget est orci dui aliquet
              porttitor. Cursus eget mauris in praesent ....
            </div>
          </div>
          <div className="flex flex-col mt-2 sm:mt-16 sm:flex-row justify-center sm:justify-start gap-4">
            <button
              type="button"
              className="bg-white w-full h-[47px] lg:w-[265px] lg:h-[73.4px] rounded-[10px] border-[#0E9046] border-2 font-bold text-[20px] lg:text-[30px] text-[#0E9046]"
              onClick={() =>
                window.open(
                  "https://github.com/blinkcreativestudio/PhilRice/blob/main/src/Assets/Map.jpg?raw=true",
                  "_blank"
                )
              }
            >
              READ NOW
            </button>
            <button
              type="button"
              className="flex justify-center items-center gap-2 bg-white w-full h-[47px] lg:w-[365px] lg:h-[73.4px] rounded-[10px] border-[#0E9046] border-2 font-bold text-[20px] lg:text-[30px] text-[#0E9046]"
              onClick={() =>
                window.open(
                  "https://github.com/blinkcreativestudio/PhilRice/blob/main/src/Assets/Map.jpg?raw=true",
                  "_blank"
                )
              }
            >
              <div className="flex items-center justify-center">
                <MyIcon className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              DOWNLOAD FILE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
