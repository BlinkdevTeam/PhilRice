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
      "Engr. Christopher V. Morales is a licensed agricultural engineer and holds the rank of Career Executive Service Officer (CESO) II. He earned a Master’s Degree in Development Studies from Erasmus University Rotterdam in the Netherlands and a Bachelor’s Degree in Agricultural Engineering, majoring in Land and Water Resources, from the University of the Philippines Los Baños (UPLB). Morales has over 25 years of government service at DA where he began as a Project Evaluation Officer and Planning Officer, later becoming Program Director. He served as Chief Agriculturist in 2015, overseeing the Field Programs Operational Planning Division, and was also OIC-Director for Field Operations from 2015 to 2016. During this time, he managed the DA’s disaster and climate risk reduction initiatives. Chris also served as OIC-Director for Agribusiness and Marketing in 2018 and as overall coordinator of the Department’s National Organic Agriculture Program (2016–2019). Earlier in his career (1997–2014), Chris played a key role in DA’s strategic and operational planning, monitoring, and evaluation of agriculture programs, including those funded by international financial institutions. In 2020, he joined the Department of Tourism (DOT) as the Regional Director of Region IV-B MIMAROPA and Director of the National Farm Tourism Program. He was subsequently designated OIC-Undersecretary for Tourism Regulation, Coordination, and Resource Generation (TRCRG) from November 2021 to July 2022, and then served as Assistant Secretary for Regional Monitoring Services (RMS) from 2022 to 2024, overseeing the DOT’s sixteen regional offices. In March 2024, Chris returned to DA to serve as Undersecretary overseeing the development of the rice industry. In recognition of his invaluable contributions to government service, he received the Outstanding UPLB Alumni Award in October 2024.",
  },
  {
    image: Speaker2,
    name: "Ms. Hazel A. Tanchuling",
    description: "Executive Director, Rice Watch <br> Action Network",
    title:
      "Evaluation and Case Studies: Key Service Delivery Mechanisms in the RCEF Implementation",
    content:
      "Hazel A. Tanchuling, a 1993 BS Community Development graduate from UP Diliman, has led the Rice Watch Action Network (R1) since its founding in 2004. She also chairs the Philippine Council for Agriculture and Fisheries (PCAF) National Sectoral Committee on Rice and serves as Interim Chair of the Gender Equality and Social Inclusion Committee.  She is a Council Member (NGO Sector) of the National Anti-Poverty Commission. With 30 years of experience, her work focuses on rural development, agriculture policy, governance, public advocacies, sustainable livelihoods, food security, and climate change adaptation in agriculture. She received the 2022 Pillar of Agriculture and Fisheries Award from DA-PCAF and the 2015 Wind Vane Award from DOST-PAGASA. Under her leadership, R1 gained international recognition for climate change efforts.  In 2020, it was named one of Start Network’s 10 International Change-Makers and won the Lasting Systemic Change Award R1’s Climate Information Services and Climate-Resiliency Field School program was also a finalist for the 2018 Gender-Just Climate Solutions Award (Transformational Solutions Category) given by the Women and Gender Constituency of the UN Framework Convention on Climate Change (UNFCCC).",
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
