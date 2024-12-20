import React, { useEffect } from "react";
import LeafDivider from "../Assets/leaf.png";
import SpeakerProfile1 from "./Profile/PlenarySession1";
import SpeakerProfile2 from "./Profile/PlenarySession2";
import SpeakerProfile3 from "./Profile/PlenarySession3";
import KeynoteSpeaker from "./Profile/KeynoteSpeaker";
import Panel1 from "./Panel/Panel1";
import Panel2 from "./Panel/Panel2";
import Panel3 from "./Panel/Panel3";

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
        {/* <div className="text-center w-full max-w-[866px] text-[13px] md:text-[18px] lg:text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
          vulputate eros, et <br />
          faucibus velit. Donec sed elit tellus.
        </div> */}
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-center text-[#0E9046] text-[26px] md:text-[35px] lg:text-[40px] mt-20">
            GUEST OF HONOR AND <br /> KEYNOTE SPEAKER
          </div>
          <div className="-mt-8 md:mt-0">
            <KeynoteSpeaker />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center -mt-[200px] md:mt-0 lg:mt-0">
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px]">
            <span className="text-[#0E9046]">Plenary Session 1</span>
            <br />
            Cutting-edge Rice R4D Innovations
          </div>
          <div className="mt-[250px] md:mt-[80px] lg:mt-[60px] xl:mt-[80px]">
            <SpeakerProfile1 />
          </div>
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px] xl:mt-[40px] lg:mt-[40px] md:mt-[60px] mt-[40px]">
            <span className="text-[#0E9046]">Panel Discussion 1</span>
            <br />
            Scaling R4D Innovations
          </div>
          <div className="-mt-[50px] md:mt-[80px] lg:mt-[80px] xl:mt-[60px]">
            <Panel1 />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[100px] md:mt-[200px] lg:mt-[200px] xl:mt-[80px]">
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px]">
            <span className="text-[#0E9046]">Plenary Session 2</span>
            <br />
            RCEF Outcomes, Impact, Success Stories, <br /> Innovations, and
            Future Directions
          </div>
          <div className="mt-[200px] md:mt-[80px] lg:mt-[60px] xl:mt-[80px]">
            <SpeakerProfile2 />
          </div>
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px] xl:mt-[40px] lg:mt-[40px] md:mt-[60px] mt-[40px]">
            <span className="text-[#0E9046]">Panel Discussion 2</span>
            <br />
            RCEF’s Innovations and Future Directions <br />
            in Modernizing Rice Farming
          </div>
          <div className="mt-[250px] md:mt-[80px] lg:mt-[80px] xl:mt-[60px]">
            <Panel2 />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-0 md:mt-[200px] lg:mt-[200px] xl:mt-[80px]">
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px]">
            <span className="text-[#0E9046]">Plenary Session 3</span>
            <br />
            Co-creating the Future: Farmer-centered <br /> Innovations and Youth
            Empowerment
          </div>
          <div className="mt-[250px] md:mt-[80px] lg:mt-[60px] xl:mt-[80px]">
            <SpeakerProfile3 />
          </div>
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px] xl:mt-[40px] lg:mt-[40px] md:mt-[60px] mt-[40px]">
            <span className="text-[#0E9046]">Panel Discussion 3</span>
            <br />
            Bridging Generations: Collaboration <br />
            between Farmers and Youth
          </div>
          <div className="mt-[250px] md:mt-[80px] lg:mt-[80px] xl:mt-[60px]">
            <Panel3 />
          </div>
        </div>
      </div>
    </>
  );
}
