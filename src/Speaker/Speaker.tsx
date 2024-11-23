import React from "react";
import LeafDivider from "../Assets/leaf.png";
import SpeakerProfile from "./Profile/PlenarySession1";
import KeynoteSpeaker from "./Profile/KeynoteSpeaker";
import { useNavigate } from "react-router-dom";

export default function Speaker() {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/speaker-details", { state: { section: "speakers" } }); // Adjust the section name as needed
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 w-screen mt-8 mb-12">
        <div className="text-[#0E9046] text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
          Speakers and <span className="text-[#F3B71C]">Panelists</span>
        </div>
        <img
          src={LeafDivider}
          alt="Leaf Divider"
          className="my-4 w-[80%] md:w-auto transform transition-transform duration-300 hover:scale-110"
        />
        {/* <div className="text-center w-full max-w-[866px] text-[13px] md:text-[18px] lg:text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
          vulputate eros, et <br />
          faucibus velit. Donec sed elit tellus.
        </div> */}
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[#0E9046] text-[20px] md:text-[35px] lg:text-[40px] mt-20">
            Keynote Speaker
          </div>
          <div className="-mt-16 md:mt-0 lg:mt-0">
            <KeynoteSpeaker />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center -mt-56 md:mt-0 lg:mt-0">
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px]">
            <span className="text-[#0E9046]">Plenary Session 1</span>
            <br />
            Cutting-edge Rice R4D Innovations
          </div>
          <div className="mt-72 md:mt-0 lg:mt-40 xl:mt-24">
            <SpeakerProfile />
          </div>
        </div>
        <button
          className="hover:bg-[#0E9046] hover:text-white hover:transition-all ease-in-out duration-300 w-[186px] h-[47px] lg:w-[265px] lg:h-[73.4px] rounded-[10px] border-[#0E9046] border-2 font-bold text-[20px] lg:text-[30px] text-[#0E9046] mt-16 xl:mb-16"
          onClick={handleSeeMore}>
          See more
        </button>
      </div>
    </>
  );
}
