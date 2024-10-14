import React from "react";
import Map from "../Assets/Map.jpg";
import LeafDivider from "../Assets/leaf.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/download.svg";

export default function Location() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full max-w-[1728px] h-auto relative">
        <img src={Map} className="w-full h-auto max-w-[1728px]" alt="Map" />
        <div className="w-full max-w-[1728px] h-auto py-10 bg-white flex flex-col justify-center items-center absolute top-0 mt-20">
          <div className="text-[#0E9046] text-6xl font-bold text-center">
            Location <span className="text-[#F3B71C]">Map</span>
          </div>
          <img src={LeafDivider} alt="Leaf Divider" className="my-4" />
          <div className="text-center text-xl w-full max-w-[866px] px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
            vulputate eros, et <br />
            faucibus velit. Donec sed elit tellus.
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1728px] h-[2px] bg-[#0E9046]" />
      <div className="flex justify-end p-4 mr-28">
        <button
          type="button"
          className="flex flex-row justify-center items-center px-8 py-2 bg-white border-2 border-[#0E9046] rounded-md text-3xl font-bold text-[#0E9046] hover:bg-[#EFB71E] transition duration-300"
          onClick={() =>
            window.open(
              "https://github.com/blinkcreativestudio/PhilRice/blob/main/src/Assets/Map.jpg?raw=true",
              "_blank"
            )
          }
        >
          <div className="flex items-center justify-center mr-2">
            <MyIcon className="w-8 h-8" />
          </div>
          Download Location Map
        </button>
      </div>
    </>
  );
}
