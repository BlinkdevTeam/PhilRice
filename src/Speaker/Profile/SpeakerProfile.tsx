import React, { useState } from "react";
import Speaker1 from "../../Assets/Speakers/SpeakerPic.png";
import Speaker1BW from "../../Assets/Speakers/SpeakerPicBW.png";

const speakersData = [
  {
    id: 1,
    name: "SampleName A. Surname",
    address: "Address Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageBW: Speaker1BW,
    imageColor: Speaker1,
  },
  {
    id: 2,
    name: "Another Name B. Surname",
    address:
      "Another address Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageBW: Speaker1BW,
    imageColor: Speaker1,
  },
  {
    id: 3,
    name: "Yet Another Name C. Surname",
    address:
      "Yet another address Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageBW: Speaker1BW,
    imageColor: Speaker1,
  },
];

const SpeakerProfile = ({ speaker }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex justify-center bg-yellow-100">
      <div
        className="w-[450px] h-[515px] flex flex-col justify-end m-4 bg-slate-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative w-[450px] h-[515px] bg-custom-gradient rounded-tr-[100px] flex flex-col justify-end">
          {/* Black and White Image */}
          <img
            src={speaker.imageBW}
            alt={speaker.name}
            className={`w-full h-auto absolute bottom-0 transition-opacity duration-500 ease-in-out ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Color Image */}
          <img
            src={speaker.imageColor}
            alt={speaker.name}
            className={`w-full h-auto absolute bottom-0 transition-opacity duration-500 ease-in-out ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute bottom-36 left-0 w-40 h-2 bg-[#EFB71E]"></div>
          <div className="flex flex-col text-center justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[450px] h-[144px] py-4 bg-[#0E9046] rounded-bl-[100px]">
            <div className="text-white flex flex-col gap-3">
              <div className="font-bold text-3xl">{speaker.name}</div>
              <div className="text-2xl">{speaker.address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeakerProfiles = () => {
  return (
    <div className="flex flex-wrap justify-center w-full py-20">
      {speakersData.map((speaker) => (
        <div
          className="flex-shrink-0 w-full xl:w-[calc(33.33%)] p-2"
          key={speaker.id}
        >
          <SpeakerProfile speaker={speaker} />
        </div>
      ))}
    </div>
  );
};

export default SpeakerProfiles;
