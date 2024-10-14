import React from "react";
import LeafDivider2 from "../Assets/leaf2.png";
import Book from "../Assets/samplebook.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/download.svg";

export default function StratPlan() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full max-w-[1484px] h-auto">
      <div className="flex flex-col gap-10 sm:flex-row justify-center items-start overflow-hidden w-full px-4">
        <div className="flex flex-col justify-center items-center sm:items-start shadow-left">
          <img src={Book} alt="book" className="max-w-full h-auto" />
        </div>
        <div className="flex flex-col overflow-hidden text-start p-4 sm:p-8">
          <div className="w-full max-w-[1005px]">
            <div className="text-[#0E9046] text-4xl sm:text-6xl font-bold">
              Strategic <span className="text-[#F3B71C]">Planning</span>
            </div>
            <img src={LeafDivider2} alt="Divider" className="my-4" />
            <div className="text-base sm:text-lg pb-32">
              Lorem ipsum dolor sit amet consectetur. Ultrices nibh rhoncus
              viverra diam adipiscing. Dui in pharetra sed porttitor justo
              fermentum sapien mattis consequat. Dolor tellus nunc commodo
              lectus neque. Scelerisque tempus tristique phasellus pretium
              pulvinar magna risus pretium feugiat. Sed amet sit morbi
              suspendisse id felis. Senectus egestas cursus curabitur netus. At
              ullamcorper in interdum dignissim ut eros erat sed maecenas. In
              maecenas nullam tellus tellus. Ullamcorper risus tellus et euismod
              massa. Consectetur massa tristique eget est orci dui aliquet
              porttitor. Cursus eget mauris in praesent ....
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <button
              type="button"
              className="flex flex-row justify-center items-center w-full sm:w-auto px-10 py-3 bg-white border-x-2 border-y-2 border-[#0E9046] rounded-md text-[#0E9046] text-3xl font-bold"
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
              className="flex flex-row justify-center items-center w-full sm:w-auto px-10 py-3 bg-white border-x-2 border-y-2 border-[#0E9046] rounded-md text-[#0E9046] text-3xl font-bold gap-6"
              onClick={() =>
                window.open(
                  "https://github.com/blinkcreativestudio/PhilRice/blob/main/src/Assets/Map.jpg?raw=true",
                  "_blank"
                )
              }
            >
              <div className="flex items-center justify-center">
                <MyIcon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              DOWNLOAD FILE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
