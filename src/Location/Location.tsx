import React from "react";
import Map from "../Assets//Mapfade.jpg";
import LeafDivider from "../Assets/leaf.png";
import { ReactComponent as MyIcon } from "../Assets/Icons/downloadWhite.svg";
import MyIcon2 from "../Assets/downloadbutton.png";

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
        <div className="flex justify-end absolute bottom-4 right-4 md:bottom-4 md:right-20">
          <div className="bg-transparent hover:bg-[#0E9046] rounded-lg absolute text-opacity-0 hover:text-opacity-100 text-white hover:text-white flex justify-start items-center transition-all ease-in-out duration-500 w-[33px] h-[33px] md:w-[53px] md:h-[53px] lg:w-[73px] lg:h-[73px] hover:w-[200px] md:hover:w-[260px] lg:hover:w-[390px]">
            <img
              src={MyIcon2}
              alt="button"
              className="w-[33px] h-[33px] md:w-[53px] md:h-[53px] lg:w-[73px] lg:h-[73px] rounded-lg"
            />
            <span className="ml-5 text-[18px] md:text-[22px] lg:text-[35px]">
              Download Map
            </span>
          </div>
        </div>
        <div className="w-[33px] h-[33px] md:w-[53px] md:h-[53px] lg:w-[73px] lg:h-[73px] p-2 bg-white rounded-full border-2 border-[#878787] flex justify-center items-center absolute bottom-8 right-4 md:bottom-16 md:right-20">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.94"
              d="M0.264355 10.4669V10.6669H0.464355H2.3458H2.5458V10.4669V3.03521C2.5458 2.76535 2.76535 2.5458 3.03521 2.5458H10.2747H10.4747V2.3458V0.464355V0.264355H10.2747H3.03521C1.50695 0.264355 0.264355 1.50695 0.264355 3.03521V10.4669Z"
              fill="#3B3B3B"
              stroke="#474747"
              stroke-width="0.4"
            />
            <path
              opacity="0.94"
              d="M16.7253 0.264355H16.5253V0.464355V2.3458V2.5458H16.7253H23.9649C24.2347 2.5458 24.4543 2.76535 24.4543 3.03521V10.4669V10.6669H24.6543H26.5357H26.7357V10.4669V3.03521C26.7357 1.50695 25.4931 0.264355 23.9649 0.264355H16.7253Z"
              fill="#3B3B3B"
              stroke="#474747"
              stroke-width="0.4"
            />
            <path
              opacity="0.94"
              d="M16.7253 24.4542H16.5253V24.6542V26.5357V26.7357H16.7253H23.9649C25.4931 26.7357 26.7357 25.4931 26.7357 23.9648V16.9175V16.7175H26.5357H24.6543H24.4543V16.9175V23.9648C24.4543 24.2347 24.2347 24.4542 23.9649 24.4542H16.7253Z"
              fill="#3B3B3B"
              stroke="#474747"
              stroke-width="0.4"
            />
            <path
              opacity="0.94"
              d="M2.5458 16.9175V16.7175H2.3458H0.464355H0.264355V16.9175V23.9648C0.264355 25.4931 1.50695 26.7357 3.03521 26.7357H10.2747H10.4747V26.5357V24.6542V24.4542H10.2747H3.03521C2.76535 24.4542 2.5458 24.2347 2.5458 23.9648V16.9175Z"
              fill="#3B3B3B"
              stroke="#474747"
              stroke-width="0.4"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
