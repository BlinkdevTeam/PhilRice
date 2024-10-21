import React, { useEffect } from "react";
import LeafDivider from "../Assets/leaf.png";
import SpeakerProfile1 from "./Profile/PlenarySession1";
import SpeakerProfile2 from "./Profile/PlenarySession2";
import SpeakerProfile3 from "./Profile/PlenarySession3";
import KeynoteSpeaker from "./Profile/KeynoteSpeaker";

export default function SpeakerPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 w-screen my-24">
        <div className="text-[#0E9046] text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
          Speakers and <span className="text-[#F3B71C]">Panelists</span>
        </div>
        <img src={LeafDivider} alt="Leaf Divider" className="my-4" />
        <div className="text-center w-full max-w-[866px] text-[13px] md:text-[18px] lg:text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
          vulputate eros, et <br />
          faucibus velit. Donec sed elit tellus.
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[#0E9046] text-[20px] md:text-[35px] lg:text-[40px] mt-20">
            Keynote Speaker
          </div>
          <KeynoteSpeaker />
        </div>
        <div className="flex flex-col justify-center items-center -mt-40 md:mt-0 lg:mt-0">
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px]">
            <span className="text-[#0E9046]">Plenary Session 1</span>
            <br />
            Cutting-edge Rice R4D Innovations
          </div>
          <SpeakerProfile1 />
        </div>
        <div className="flex flex-col justify-center items-center -mt-40 md:mt-0 lg:mt-0">
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px]">
            <span className="text-[#0E9046]">Plenary Session 2</span>
            <br />
            RCEF Outcomes, Impact, Success Stories, Innovations, and Future
            Directions
          </div>
          <SpeakerProfile2 />
        </div>
        <div className="flex flex-col justify-center items-center -mt-40 md:mt-0 lg:mt-0">
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px]">
            <span className="text-[#0E9046]">Plenary Session 3</span>
            <br />
            Co-creating the Future: Farmer-centered Innovations and Youth
            Empowerment
          </div>
          <SpeakerProfile3 />
        </div>
      </div>
    </>
  );
}
