import React, { useState } from "react";
import Speaker1 from "../../Assets/Panels/Panel3/WEB_PD1_MENDOZA.png";
import Speaker2 from "../../Assets/Panels/Panel3/WEB_PD1_AMPARO.png";
import Speaker3 from "../../Assets/Panels/Panel3/WEB_PD1_ORTEGA.png";
import Speaker4 from "../../Assets/Panels/Panel3/WEB_PD1_CORALES.png";

import PanelModal from "../../Modal/PanelModal";
import "../speakerpage.css";

const speakersData = [
  {
    image: Speaker1,
    name: "Mr. Vincent Roy P. Mendoza",
    description: "Farmvocacy PH",
    title: "",
    content:
      "Mr. Vincent Roy P. Mendoza, the Founder and Chief Executive Officer of Farmvocacy, is a BS in Agriculture graduate from the University of the Philippines Los Baños. He joined multinational companies in the seeds and agrochemical industry. While working there, he took his Master’s in Business Administration from Ateneo Graduate School of Business but later on decided not to complete the remaining three units, believing that writing a business plan without actually running his own business would not add value. He then worked for several years with a major local snacks and beverage company doing sales, marketing, and corporate planning. After more than a decade of working as an employee, he decided to join a friend to start a running event-organizing company growing the community from a mere 800 per event to more than 20,000 runners in just 12 months. For years, he sold seeds, fertilizers, and chemical pesticides without having made an impact until he founded Farmvocacy. Today, Farmvocacy is the sole climate fintech startup in the Philippines working in decarbonizing rice while at the same time helping farmers access affordable financing using their grains as collateral.",
  },
  {
    image: Speaker2,
    name: "Mr. Ruel Amparo",
    description: "Cropital",
    title: "",
    content:
      "Mr. Ruel Amparo is the Chief Executive Officer and Founder of Cropital Enterprises Corporation, a renowned social impact peer-to-peer lending platform supporting smallholder farmers in the Philippines. At just 22, he pioneered the creation and implementation of this crowdfunding platform, which now has 35,000 lenders. Currently, he is the CEO of Agrilever Philippines, the leading Digital Transformation Platform for small famers. In both Cropital and Agrilever, he has helped unlocked more than 1B worth of funds for loans for small famers. A graduate with academic distinction from the University of the Philippines, Mr. Amparo began his career as an Account Executive, overseeing strategic account acquisition, volume and credit performance management, and customer support. An Industrial Engineer by profession, he has also worked with leading companies in the oil and gas industry and management consulting, including Shell Philippines Exploration, Petron Corporation, and Boston Consulting Group. For his innovative work in digitized value chain financing, he has received national recognition for student leadership, data analytics, and community development. His awards include the 2017 Best Social Enterprise (Villar Sipag), a spot on Forbes Asia’s 30 Under 30 in Finance, and the 2016 Best Social Enterprise (Ricebowl Awards). He has spoken at various events, including the 2018 TBN Asia Conference in Jakarta and the 2017 BSP-ADB Conference on Financing Agriculture Value Chain in Manila. He was honored as the 2018 UPIEAA Distinguished Young Alumnus for Social Enterprise. Mr. Amparo is also a committed volunteer and advocate, leading several socio-civic initiatives, such as a malnutrition reduction program in Payatas, Quezon City, which successfully decreased malnutrition rates among children in the program.",
  },
  {
    image: Speaker3,
    name: "Mr. Joseph Francisco Ortega",
    description: "National Youth Commission",
    title: "",
    content:
      "Mr. Joseph Francisco Ortega is the new chairperson of the National Youth Commission. He earned his BA degree in Political Science at the Ateneo de Manila University in 2013 and a master’s degree in Business Administration at Ateneo Graduate School of Business in 2023. He served as the Regional Director of the Department of Tourism Region 1 since 2019. The youngest to be designated in the post, he spearheaded numerous initiatives to boost regional tourism and promote sustainable development.",
  },
  {
    image: Speaker4,
    name: "Mr. Rizal G. Corales",
    description: "DA-PhilRice RCEF-PMO",
    title: "",
    content:
      "Mr. Rizal G. Corales, a son of Sanchez Mira, Cagayan, earned his BS in Agriculture from the Mariano Marcos State University (1980), MS in Crop Protection from Central Luzon State University (1997), and MS in Agriculture from the University of Ryukus, Japan (2000). He began his career in 1980 as Farm Management Technician II at the Philippine Cotton Corporation and joined DA-PhilRice as Science Research Specialist I in 1992; retired in October 2024. With 40 years of government service, he has received multiple productivity and distinction awards, including Outstanding Research Staffer (2003, 2007), the Executive Director’s Award (2021), and Awards for Excellence (2023). Together with his co-authors, he garnered the Most Outstanding Monograph Award for “The Science and Art of Palayamanan Plus” from the National Academy of Science and Technology in 2020. He also earned the Presidential PAGASA Award (2017) and the 2024 Pagwadan and Distinguished Alumni Awards from MMSU. He is married to Dr. Aurora M. Corales, a DA-PhilRice alumna, and they have three daughters: Helen Valerie, Laarni Grace, and Minerva.",
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
    <>
      <div className="hidden min-h-auto mt-[40px] px-9 md:flex flex-wrap items-center justify-center">
        <div className="flex flex-wrap justify-center gap-[250px] md:gap-[80px] lg:gap-[60px]">
          {speakersData.map((speaker, index) => (
            <div
              key={index}
              className="w-[299px] md:w-[230px] h-[370px] md:h-[551px] bg-gr-custom-gradient rounded-tr-[100px] relative -mt-40 md:mt-2 lg:mt-0 cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(speaker)}>
              <div className="absolute -top-12 w-[299px] flex justify-center items-start md:w-[230px] h-[370px] md:h-[551px] overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="max-w-[336px] max-h-auto rounded-bl-[80px] fade-bottom"
                />
              </div>
              {/* <div className="absolute bottom-28 md:bottom-[180px] left-0 w-40 h-2 bg-[#EFB71E]" /> */}
              <div className="absolute text-[15px] md:text-[22px] bottom-0 flex flex-col justify-center items-center text-center text-white bg-yel-custom-gradient w-full h-[115.64px] md:h-[350px] rounded-bl-[80px] px-2 fade-top">
                <div className="text-[22px] md:text-[30px] font-bold">
                  {speaker.name}
                </div>
                <div
                  className="text-[15px] md:text-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: speaker.description,
                  }}></div>
              </div>
            </div>
          ))}
        </div>
        <PanelModal
          isOpen={isModalOpen}
          onClose={closeModal}
          speaker={selectedSpeaker}
        />
      </div>
      {/*below tablet */}
      <div className="md:hidden min-h-[400px] px-9 flex justify-center items-start -mt-[160px] mb-[80px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-[20px] md:gap-[40px] lg:gap-[60px]">
          {speakersData.slice(0, 4).map((speaker, index) => (
            <div
              key={index}
              className="w-[130px] md:w-[230px] h-[225px] md:h-[551px] bg-gr-custom-gradient rounded-tr-[50px] relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(speaker)}>
              <div className="absolute -top-3 w-[130px] flex justify-center items-start md:w-[230px] h-[370px] md:h-[551px] overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="max-w-[150px] max-h-auto fade-bottom rounded-bl-[30px]"
                />
              </div>
              <div className="absolute bottom-0 flex flex-col justify-center items-center text-center text-white bg-yel-custom-gradient w-full h-[115.64px] md:h-[350px] rounded-bl-[40px] px-1 fade-top">
                <div className="text-[10px] md:text-[30px] font-bold">
                  {speaker.name}
                </div>
                <div
                  className="text-[9px] md:text-[20px]"
                  dangerouslySetInnerHTML={{
                    __html: speaker.description,
                  }}></div>
              </div>
            </div>
          ))}
        </div>
        <PanelModal
          isOpen={isModalOpen}
          onClose={closeModal}
          speaker={selectedSpeaker}
        />
      </div>
    </>
  );
};

export default SpeakerProfiles;
