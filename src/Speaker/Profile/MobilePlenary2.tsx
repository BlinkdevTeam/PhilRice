// SpeakerProfiles.js
import React, { useState } from "react";
import Speaker1 from "../../Assets/Speakers/Speaker1.png";
import Speaker2 from "../../Assets/Speakers/Speaker2.png";
import Modal from "../../Modal/SpeakerModal";

const speakersData = [
  {
    image: Speaker2,
    name: "Ms. Dianne Gail L. Maharjan",
    description: "NEDA",
    title:
      "Panel Discussion 3: Bridging Generations: Collaboration between Farmers and Youth",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nunc sit morbi a sed enim eu molestie. At arcu in odio sem ac eget mauris quam. Sed praesent pretium etiam tempor at leo est. Purus dictum orci consectetur dapibus cursus vulputate. Turpis scelerisque lectus sed eu arcu etiam magnis. Vivamus nunc enim orci et arcu vulputate. Gravida eget hendrerit ut faucibus sit urna amet dignissim praesent. Amet amet sed quisque euismod at habitasse mattis dui arcu.Vel lobortis aliquet fringilla id. Eu sed dictum enim quisque mattis aliquam blandit. Arcu blandit sagittis ac metus praesent mi vitae. Interdum nam porta est accumsan gravida id tortor sit. Iaculis faucibus in ac morbi cras est et non. Mi purus duis, ",
  },
  {
    image: Speaker1,
    name: "Dr. Reynaldo V. Ebora",
    description: "DOST-PCAARRD",
    title:
      "Panel Discussion 3: Bridging Generations: Collaboration between Farmers and Youth",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nunc sit morbi a sed enim eu molestie. At arcu in odio sem ac eget mauris quam. Sed praesent pretium etiam tempor at leo est. Purus dictum orci consectetur dapibus cursus vulputate. Turpis scelerisque lectus sed eu arcu etiam magnis. Vivamus nunc enim orci et arcu vulputate. Gravida eget hendrerit ut faucibus sit urna amet dignissim praesent. Amet amet sed quisque euismod at habitasse mattis dui arcu.Vel lobortis aliquet fringilla id. Eu sed dictum enim quisque mattis aliquam blandit. Arcu blandit sagittis ac metus praesent mi vitae. Interdum nam porta est accumsan gravida id tortor sit. Iaculis faucibus in ac morbi cras est et non. Mi purus duis, ",
  },
];

const SpeakerProfiles = () => {
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
    <div className="flex flex-col items-center justify-start mt-10 text-sm md:text-2xl">
      <div className="flex flex-col px-2 gap-2">
        {speakersData.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-row w-full border border-gray-100 bg-[#0E9046]"
            onClick={() => openModal(speaker)}>
            <img
              src={speaker.image}
              className="w-[35%] md:w-[25%] bg-custom-gradient"
            />
            <div className="w-2 h-auto bg-[#EFB71E]" />
            <div className="flex flex-col justify-center ml-2 md:ml-12 text-white">
              <div className="font-bold text-sm sm:text-2xl md:text-xl">
                {speaker.name}
              </div>
              <div className="text-gray-200 text-xs sm:text-xl md:text-lg">
                {speaker.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex flex-wrap justify-center gap-[200px] md:gap-[100px] lg:gap-[80px]">
        {speakersData.map((speaker, index) => (
          <div
            key={index}
            className="w-[299px] md:w-[449px] h-[370px] md:h-[518px] bg-custom-gradient rounded-tr-[100px] relative -mt-40 md:mt-2 lg:mt-0 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(speaker)}>
            <img
              src={speaker.image}
              alt={speaker.name}
              className="absolute bottom-0 w-full h-auto rounded-bl-[80px]"
            />
            <div className="absolute bottom-28 md:bottom-36 left-0 w-40 h-2 bg-[#EFB71E]" />
            <div className="absolute text-[15px] md:text-[22px] bottom-0 flex flex-col justify-center items-center text-center text-white bg-[#0E9046] w-full h-[115.64px] md:h-[147px] rounded-bl-[80px] px-2">
              <div className="text-[22px] md:text-[30px] font-bold">
                {speaker.name}
              </div>
              <div className="text-[15px] md:text-[22px]">
                {speaker.description}
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        speaker={selectedSpeaker}
      />
    </div>
  );
};

export default SpeakerProfiles;
