import React, { useState } from "react";
import Speaker1 from "../../Assets/Speakers/Web_Laurel.png";
import Modal from "../../Modal/SpeakerModal";

const speakersData = [
  {
    image: Speaker1,
    name: "Francisco P. Tiu Laurel Jr.",
    description: "Secretary, Department of <br> Agriculture",
    title: "PLENARY SESSION 1. Cutting-edge Rice R4D Innovations",
    content:
      "Francisco Tiu Laurel, Jr., the Secretary of Agriculture, was the former President of Frabelle Group of Companies. The conglomerate traces its roots from a deep-sea fishing firm established in 1966. “Kiko” to his friends and colleagues, Francisco Jr. is a hands-on executive. He learned the ropes of his family’s fishing business at the age of 19 and used a multidisciplinary approach to build his company. While at the helm of Frabelle Group, Francisco Jr. likes to keep things simple. He sets bold objectives that are also attainable and relevant – traits that could help him well in his new role as agriculture secretary. Since accepting the offer of President Ferdinand Marcos, Jr. to succeed him as DA Secretary, Sec. Kiko divested from his family’s businesses. Asked why he took the challenge, he said he wanted to give back to Philippine agriculture. His current motto: “Bayan naman.” Currently, Sec. Kiko is a Captain and Commander in the Nava Affiliated Reserve Force NCR (WESPHIL) of the Philippine Navy.",
  },
];

const KeynoteSpeaker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const openModal = (speaker: any) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };
  return (
    <div className="min-h-screen px-9 flex flex-wrap items-center justify-center">
      <div className="flex flex-wrap justify-center gap-[200px] md:gap-[100px] lg:gap-[80px]">
        {speakersData.map((speaker, index) => (
          <div
            key={index}
            className="w-[299px] md:w-[449px] h-[370px] md:h-[518px] bg-custom-gradient rounded-tr-[100px] relative -mt-40 md:mt-2 lg:mt-0 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(speaker)}>
            <img
              src={speaker.image}
              alt={speaker.name}
              className="absolute bottom-16 w-full h-auto rounded-bl-[80px]"
            />
            <div className="absolute bottom-28 md:bottom-[180px] left-0 w-40 h-2 bg-[#EFB71E]" />
            <div className="absolute text-[15px] md:text-[22px] bottom-0 flex flex-col justify-center items-center text-center text-white bg-[#0E9046] w-full h-[115.64px] md:h-[180px] rounded-bl-[80px] px-2">
              <div className="text-[22px] md:text-[30px] font-bold">
                {speaker.name}
              </div>
              <div
                className="text-[15px] md:text-[25px]"
                dangerouslySetInnerHTML={{ __html: speaker.description }}></div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        speaker={selectedSpeaker}
      />
    </div>
  );
};

export default KeynoteSpeaker;
