import React from "react";
import Speaker1 from "../../Assets/SpeakerPic.png";

const speakersData = [
  {
    id: 1,
    name: "SampleName A. Surname",
    address: "Address Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Speaker1,
  },
  {
    id: 2,
    name: "Another Name B. Surname",
    address:
      "Another address Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Speaker1, // Replace with different images if needed
  },
  {
    id: 3,
    name: "Yet Another Name C. Surname",
    address:
      "Yet another address Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Speaker1, // Replace with different images if needed
  },
  {
    id: 4,
    name: "More Names D. Surname",
    address:
      "More addresses Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Speaker1, // Replace with different images if needed
  },
  {
    id: 4,
    name: "More Names D. Surname",
    address:
      "More addresses Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Speaker1, // Replace with different images if needed
  },
  {
    id: 4,
    name: "More Names D. Surname",
    address:
      "More addresses Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Speaker1, // Replace with different images if needed
  },
  // Add more speakers as needed
];

const SpeakerProfile = ({ speaker }: any) => {
  return (
    <div className="flex">
      <div className="w-[450px] h-[545px] bg-red-500 flex flex-col justify-end m-4">
        <div className="w-[450px] h-[515px] bg-[#f0f0f0] rounded-tr-[100px] flex flex-col justify-end">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-auto"
          />
          <div className="absolute w-[450px] h-[144px] py-4 bg-[#0E9046] flex flex-col text-center justify-center">
            <div className="font-bold">{speaker.name}</div>
            <div>{speaker.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeakerProfiles = () => {
  return (
    <div className="flex flex-wrap justify-center w-[1491px]">
      {speakersData.map((speaker) => (
        <div
          className="flex-shrink-0"
          style={{ width: "calc(33.33% - 32px)" }}
          key={speaker.id}
        >
          <SpeakerProfile speaker={speaker} />
        </div>
      ))}
    </div>
  );
};

export default SpeakerProfiles;
