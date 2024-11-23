// SpeakerProfiles.js
import React, { useState } from "react";
import Speaker1 from "../../Assets/Speakers/Web_Morales.png";
import Speaker2 from "../../Assets/Speakers/Web_Tanchuling.png";
import Modal from "../../Modal/SpeakerModal";

const speakersData = [
  {
    image: Speaker1,
    name: "Engr. Christopher V. <br> Morales, CESO II",
    description: "Undersecretary for Rice Industry <br> Development, DA",
    title:
      "Overview of RCEF’s Achievements and Initial Impact on the Rice Industry",
    content:
      "Engr. Christopher V. Morales is a license agricultural engineer and holds the rank of Caree Executive Service Officer (CESO) II. He earned  Master’s Degree in Development Studies fro Erasmus University Rotterdam in the Netherland and a Bachelor’s Degree in Agricultural Engineering majoring in Land and Water Resources, from th University of the Philippines Los Baños (UPLB) Morales has over 25 years of government servic at DA where he began as a Project Evaluatio Officer and Planning Officer, later becomin Program Director. He served as Chief Agriculturis in 2015, overseeing the Field Programs Operationa Planning Division, and was also OIC-Director for Fiel Operations from 2015 to 2016. During this time, h managed the DA’s disaster and climate risk reductio initiatives. Chris also served as OIC-Director fo Agribusiness and Marketing in 2018 and as overall coordinator of the Department’ National Organic Agriculture Program (2016–2019). Earlier in his career (1997–2014) Chris played a key role in DA’s strategic and operational planning, monitoring, an evaluation of agriculture programs, including those funded by international financia institutions In 2020, he joined the Department of Tourism (DOT) as the Regional Director o Region IV-B MIMAROPA and Director of the National Farm Tourism Program. He wa subsequently designated OIC-Undersecretary for Tourism Regulation, Coordination and Resource Generation (TRCRG) from November 2021 to July 2022, and the served as Assistant Secretary for Regional Monitoring Services (RMS) from 2022 t 2024, overseeing the DOT’s sixteen regional offices In March 2024, Chris returned to DA to serve as Undersecretary overseeing th development of the rice industry. In recognition of his invaluable contributions t government service, he received the Outstanding UPLB Alumni Award in Octobe 2024.",
  },
  {
    image: Speaker2,
    name: "Ms. Hazel A. Tanchuling",
    description: "Executive Director, Rice Watch <br> Action Network",
    title:
      "Evaluation and Case Studies: Key Service Delivery Mechanisms in the RCEF Implementation",
    content:
      "Engr. Christopher V. Morales is a licensed agricultural engineer and holds the rank of Career Executive Service Officer (CESO) II. He earned a Master’s Degree in Development Studies from Erasmus University Rotterdam in the Netherlands and a Bachelor’s Degree in Agricultural Engineering, majoring in Land and Water Resources, from the University of the Philippines Los Baños (UPLB). Morales has over 25 years of government service at DA where he began as a Project Evaluation Officer and Planning Officer, later becoming Program Director. He served as Chief Agriculturist in 2015, overseeing the Field Programs Operational Planning Division, and was also OIC-Director for Field Operations from 2015 to 2016. During this time, he managed the DA’s disaster and climate risk reduction initiatives. Chris also served as OIC-Director for Agribusiness and Marketing in 2018 and as overall coordinator of the Department’s National Organic Agriculture Program (2016–2019). Earlier in his career (1997–2014), Chris played a key role in DA’s strategic and operational planning, monitoring, and evaluation of agriculture programs, including those funded by international financial institutions. In 2020, he joined the Department of Tourism (DOT) as the Regional Director of Region IV-B MIMAROPA and Director of the National Farm Tourism Program. He was subsequently designated OIC-Undersecretary fo Tourism Regulation, Coordination, and Resource Generation (TRCRG) from November 2021 to July 2022, and then served as Assistant Secretary for Regional Monitoring Services (RMS) from 2022 to 2024, overseeing th DOT’s sixteen regional offices. In March 2024, Chris returned to DA to serve as Undersecretary overseeing the development of the rice industry. In recognition of his invaluable contributions to government service, he received the Outstanding UPLB Alumni Award in October 2024.",
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
      <div className="flex flex-wrap justify-center gap-[250px] md:gap-[100px] lg:gap-[80px]">
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
              <div
                className="text-[22px] md:text-[30px] font-bold"
                dangerouslySetInnerHTML={{ __html: speaker.name }}></div>
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

export default SpeakerProfiles;
