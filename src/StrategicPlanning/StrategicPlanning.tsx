import React from "react";
import LeafDivider2 from "../Assets/leaf2.png";
import Book from "../Assets/booksample.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/download.svg";

export default function StratPlan() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center w-[1484px] h-auto">
        <div className="flex justify-center items-center overflow-hidden w-[1500px] h-[632px] bg-gray-500">
          <div className="flex flex-col justify-start items-start">
            <img src={Book} alt="DOA Logo" className="" />
          </div>
          <div className="flex flex-col overflow-hidden text-start bg-red-200">
            <div className="w-[1005px]">
              <div className="text-[#0E9046]">
                Strategic <span className="text-[#F3B71C]">Planning</span>
              </div>
              <img src={LeafDivider2} alt="Divider" />
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
            <div className="flex flex-row">
              <button
                type="button"
                className="flex flex-row justify-center items-center px-32 py-2 bg-white border-x-2 border-y-2 border-[#0E9046] rounded-md text-[#0E9046]"
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
                className="flex flex-row justify-center items-center px-32 py-2 bg-white border-x-2 border-y-2 border-[#0E9046] rounded-md text-[#0E9046]"
                onClick={() =>
                  window.open(
                    "https://github.com/blinkcreativestudio/PhilRice/blob/main/src/Assets/Map.jpg?raw=true",
                    "_blank"
                  )
                }
              >
                <div className="flex items-center justify-center">
                  <MyIcon className="w-10 h-10" />
                </div>
                DOWNLOAD FILE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
