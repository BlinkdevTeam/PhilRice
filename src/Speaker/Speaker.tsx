import React from "react";
import LeafDivider from "../Assets/leaf.png";
import SpeakerProfile from "./Profile/SpeakerProfile";

export default function Speaker() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 w-screen bg-red-100">
        <div className="text-[#0E9046] text-6xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-center">
          Speaker and <span className="text-[#F3B71C]">Panelists</span>
        </div>
        <img src={LeafDivider} alt="Leaf Divider" className="my-4" />
        <div className="text-center w-full max-w-[866px] text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
          vulputate eros, et <br />
          faucibus velit. Donec sed elit tellus.
        </div>
        <SpeakerProfile />
      </div>
    </>
  );
}
