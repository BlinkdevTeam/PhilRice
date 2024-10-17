import React from "react";
import Map from "../Assets//Mapfade.jpg";
import LeafDivider from "../Assets/leaf.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/download.svg";
import MyIcon2 from "../Assets/Icons/downloadbutton.png";

export default function Location() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-auto relative">
        <img src={Map} className="w-screen h-auto" alt="Map" />
        {/* <div className="w-full max-w-[1728px] h-auto py-10 bg-white flex flex-col justify-center items-center absolute top-0 mt-20">
          <div className="text-[#0E9046] text-6xl font-bold text-center">
            Location <span className="text-[#F3B71C]">Map</span>
          </div>
          <img src={LeafDivider} alt="Leaf Divider" className="my-4" />
          <div className="text-center text-xl w-full max-w-[866px] px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
            vulputate eros, et <br />
            faucibus velit. Donec sed elit tellus.
          </div>
        </div> */}
        <div className="flex justify-end mr-16 absolute bottom-32 right-2">
          <div className="bg-transparent hover:bg-[#0E9046] absolute text-opacity-0 hover:text-opacity-100 text-white hover:text-black flex justify-start items-center transition-all ease-in-out h-[73px] w-[73px] hover:w-[436px]">
            <img src={MyIcon2} alt="button" className="" />
            <span className="ml-10 text-[35px]">Download Map</span>
          </div>
        </div>
      </div>
    </>
  );
}
