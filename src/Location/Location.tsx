import React from "react";
import Map from "../Assets/Map.jpg";
import LeafDivider from "../Assets/leaf.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/download.svg";

export default function Location() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[1728px] h-[974px] relative">
        <img src={Map} className="h-auto max-w-full" alt="Map" />
        <div className="w-[1728px] h-[264px] bg-slate-500 flex flex-col justify-center items-center absolute top-0 mt-20">
          <div className="text-[#0E9046]">
            Location <span className="text-[#F3B71C]">Map</span>
          </div>
          <img src={LeafDivider} alt="Leaf Divider" />
          <div className="text-center w-[866px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
            vulputate eros, et <br />
            faucibus velit. Donec sed elit tellus.
          </div>
        </div>
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
          Download Location Map
        </button>
      </div>
    </>
  );
}
