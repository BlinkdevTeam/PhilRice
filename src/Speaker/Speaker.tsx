import React from "react";
import LeafDivider from "../Assets/leaf.png";
import SpeakerProfile from "./Profile/SpeakerProfile";

export default function Speaker() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-[#0E9046]">
          Speaker and <span className="text-[#F3B71C]">Panelists</span>
        </div>
        <img src={LeafDivider} alt="Leaf Divider" />
        <div className="text-center w-[866px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
          vulputate eros, et <br />
          faucibus velit. Donec sed elit tellus.
        </div>
        <SpeakerProfile />
      </div>
    </>
  );
}
