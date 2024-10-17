import React from "react";
import LeafDivider from "../Assets/leaf.png";
import SpeakerProfile from "./Profile/SpeakerProfile";

export default function Speaker() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 w-screen">
        <div className="text-[#0E9046] text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
          Speaker and <span className="text-[#F3B71C]">Panelists</span>
        </div>
        <img src={LeafDivider} alt="Leaf Divider" className="my-4" />
        <div className="text-center w-full max-w-[866px] text-[13px] md:text-[18px] lg:text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
          vulputate eros, et <br />
          faucibus velit. Donec sed elit tellus.
        </div>
        <div className="font-bold text-[20px] md:text-[35px] lg:text-[40px] mt-20">
          Plenary Speakers
        </div>
        <SpeakerProfile />
        <button className="w-[186px] h-[47px] lg:w-[265px] lg:h-[73.4px] rounded-[10px] border-[#0E9046] border-2 font-bold text-[20px] lg:text-[30px] text-[#0E9046] mt-16 lg:mt-0">
          See more
        </button>
      </div>
    </>
  );
}
