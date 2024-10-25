import React, { useState } from "react";
import Speaker1 from "../../Assets/Speakers/Speaker1.png";
import Speaker2 from "../../Assets/Speakers/Speaker2.png";
import Speaker3 from "../../Assets/Speakers/Speaker3.png";
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
  {
    image: Speaker3,
    name: "Dr. Mitsuhiro Obara",
    description: "JIRCAS",
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
    <div className="min-h-screen px-9 flex flex-wrap items-center justify-center">
      <div className="flex flex-wrap justify-center gap-[200px] md:gap-[100px] lg:gap-[80px]">
        {speakersData.map((speaker, index) => (
          <div
            key={index}
            className="w-[299px] md:w-[449px] h-[370px] md:h-[518px] bg-custom-gradient rounded-tr-[100px] relative -mt-40 md:mt-2 lg:mt-0 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(speaker)}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="absolute bottom-0 w-full h-auto rounded-bl-[80px]"
            />
            <div className="absolute bottom-28 md:bottom-36 left-0 w-40 h-2 bg-[#EFB71E]" />
            <div className="absolute text-[15px] md:text-[22px] bottom-0 flex flex-col justify-center items-center text-center text-white bg-[#0E9046] w-full h-[115.64px] md:h-[147px] rounded-bl-[80px] px-2">
              His Excellency
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
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        speaker={selectedSpeaker}
      />
    </div>
  );
};

export default SpeakerProfiles;
