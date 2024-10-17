import React from "react";
import Speaker1 from "../../Assets/Speakers/Speaker1.png";
import Speaker2 from "../../Assets/Speakers/Speaker2.png";
import Speaker3 from "../../Assets/Speakers/Speaker3.png";

const speakersData = [
  {
    image: Speaker1,
    name: "Jayson San Agustin, PhD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    image: Speaker2,
    name: "Maria Sanchez, MSc",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus.",
  },
  {
    image: Speaker3,
    name: "John Doe, MD",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
  },
];

const SpeakerProfiles = () => {
  return (
    <div className="min-h-screen px-9 mt-12 flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-4">
        {speakersData.map((speaker, index) => (
          <div
            key={index}
            className="w-[369px] md:w-[449px] h-[414px] md:h-[518px] bg-custom-gradient rounded-tr-[100px] relative mt-10"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="absolute bottom-0 w-full h-auto rounded-bl-[80px]"
            />
            <div className="absolute bottom-28 md:bottom-36 left-0 w-40 h-2 bg-[#EFB71E]" />
            <div className="absolute bottom-0 flex flex-col justify-center items-center text-center text-white bg-[#0E9046] w-full h-[115.64px] md:h-[147px] rounded-bl-[80px] px-2">
              <div className="text-[22px] md:text-[30px] font-bold">
                {speaker.name}
              </div>
              <div className="text-[15px] md:text-[22px]">
                {speaker.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerProfiles;
