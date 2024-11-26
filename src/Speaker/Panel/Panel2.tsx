import React, { useState } from "react";
import Speaker1 from "../../Assets/Panels/Panel2/WEB_PD1_BORDEY.png";
import Speaker2 from "../../Assets/Panels/Panel2/WEB_PD1_RECORTER.png";
import Speaker3 from "../../Assets/Panels/Panel2/WEB_PD1_CONSTANTINO.png";
import Speaker4 from "../../Assets/Panels/Panel2/WEB_PD1_DATOR.png";
import Speaker5 from "../../Assets/Panels/Panel2/WEB_PD1_CROBALDE.png";
import Speaker6 from "../../Assets/Panels/Panel2/WEB_PD1_VERDADERO.png";

import PanelModal from "../../Modal/PanelModal";
import "../speakerpage.css";

const speakersData = [
  {
    image: Speaker1,
    name: "Dr. Flordeliza H. Bordey",
    description: "RCEF-Seed (DA-PhilRice)",
    title: "",
    content:
      "Dr. Flordeliza H. Bordey serves as the Deputy Executive Director for Special Concerns on the Implementation of Rice Competitiveness Enhancement Fund (RCEF) at DA-PhilRice. She primarily oversees the RCEF Seed Program under Republic Act 11203, which aims to provide high-quality inbred rice seeds to farmers nationwide. In addition to this role, Dr. Bordey, an accomplished economist, provides technical support to the Department of Agriculture on rice supply and demand projections and has contributed extensively to publications in rice agricultural economics. She has also held the position of Acting Deputy Executive Director for both research and development at DA-PhilRice. In 2021, she was recognized with the Presidential Lingkod Bayan Award. She hails from the Science City of Muñoz, Nueva Ecija. She holds BS and MS degrees in Economics from the University of the Philippines – Diliman and a PhD in Agricultural Economics from the University of Illinois Urbana-Champaign, USA.",
  },
  {
    image: Speaker2,
    name: "Engr. Remelyn R. Recoter",
    description: "RCEF-Extension (DA-ATI)",
    title: "",
    content:
      "Engr. Remelyn R. Recoter, CESO III, currently leads the DA-Agricultural Training Institute (DA-ATI), a key institution for capacity building, knowledge sharing, and agriculture and fisheries extension in the Philippines. Beginning her public service as an Agricultural Extension Specialist I at DA-ATI, she steadily progressed through the ranks, serving the Institute for 18 years. With over 35 years in the agriculture and fishery sector, she has made significant contributions to the field. Initially planning to retire as the Center Director of ATI-Regional Training Center VI, her career took a turn when she was appointed as Director III of the DA-Regional Field Office VI and later as the Regional Technical Director for Operations. In 2012, Typhoon Pablo’s devastation of the Davao Region marked another career shift for her. She was reassigned from Iloilo City as the OIC-Regional Executive Director (RED) of the DA-Regional Field Office XI to lead rehabilitation efforts and support affected farmers. During her tenure in Davao, she was appointed by then President Benigno ‘Noynoy’ Aquino as a full-fledged RED. After 3.5 years in Davao, she returned to her home region in July 2016. In 2023, she was recognized as one of the Most Outstanding Aklanons in government service for her work in agriculture. She holds a BS in Chemical Engineering from the Central Philippine University.",
  },
  {
    image: Speaker3,
    name: "Ms. Rosalina S. Constantino",
    description: "RCEF-Extension (TESDA)",
    title: "",
    content:
      "Ms. Rosalina S. Constantino is the Executive Director of the Regional Operations Management Office (ROMO) at the Technical Education and Skills Development Authority (TESDA), the Philippines’ authority on Technical Vocational Education and Training (TVET). TESDA ensures that TVET policies and programs adapt to evolving economic and labor market demands. It leads by setting overall policies and direction, developing systems and standards, supporting TVET implementation, and enhancing the capacity of TESDA and its partners to deliver relevant TVET programs. As ROMO Executive Director, Ms. Constantino manages TESDA’s scholarship programs and oversees the implementation TESDA programs across regional, provincial, and district offices, including TESDA Technology Institutions. With 25 years of government service, she has risen from the ranks. Before her current role, she served as Assistant Executive Director of the Planning Office (July 2019 to December 2020) and became its Executive Director in 2021. Her extensive career has equipped her with deep expertise in TVET, operations, and quality management systems.",
  },
  {
    image: Speaker4,
    name: "Mr. Joel V. Dator",
    description: "RCEF-Mechanization (DA-PHilMech)",
    title: "",
    content:
      "Mr. Joel V. Dator serves as the Deputy Director of the Philippine Center for Postharvest Development and Mechanization (PHilMech), with nearly 40 years of experience across both public and private sectors. He brings a wealth of knowledge in agricultural operations and the technical aspects of postharvest processes. In his current capacity, Director Dator oversees the Rice Competitiveness Enhancement Fund (RCEF) Mechanization Program, managing field operations and ensuring the program’s effective implementation. His leadership has been instrumental in driving the program’s success. Over his career, he has engaged in numerous local and international training programs on agricultural productivity and postharvest technologies, covering grains management, rice and corn production, livestock, and postharvest facility development. Director Dator is also deeply involved in building strategic partnerships with key stakeholders, strengthening the PHilMech’s programs through robust collaboration and networks.",
  },
  {
    image: Speaker5,
    name: "Mr. Danilo D. Crobalde",
    description: "RCEF-Credit (Landbank of the Philippines)",
    title: "",
    content:
      "Mr. Danilo D. Crobalde, Assistant Vice President, is a seasoned banking professional with a distinguished career spanning over 25 years. He earned his BS in Accountancy from the Divine Word College in Occidental Mindoro and passed the Licensure Exam for Certified Public Accountants in 1995. Mr. Crobalde made significant strides in the banking industry and led the LandBank Occidental Mindoro Lending Center from 2015 until May 2024. A farmer’s son, his tenure there was marked by his expertise in lending operations and commitment to provide accessible financing to farmers, fishers, and other mandated sectors of the Bank. In June 2024, he took on a new challenge as Assistant Vice President and Head of Landbank’s Programs Management Department I. In this role, he is responsible for formulating, developing, and enhancing the Bank’s lending programs. His extensive experience and deep knowledge of lending operations have established him as a trusted advisor within the banking sector.",
  },
  {
    image: Speaker6,
    name: "Ms. Rallen O. Verdadero,",
    description: "RCEF-Credit (Development Bank of the Philippines)",
    title: "",
    content:
      "Ms. Rallen O. Verdadero has been with the Development Bank of the Philippines since 2006. Currently, she serves as a Senior Assistant Vice President and the Head of the Program Development and Management II Department, where she formulates, designs, and executes loan programs and products to support the major thrusts of the Bank in the areas of agribusiness and enterprise (MSME) development. Her leadership has driven the creation of essential lending products that empower small enterprises and strengthen the agriculture sector, underscoring the Bank’s commitment to economic growth and financial inclusion.",
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
        <div className="grid grid-cols-2 grid-rows-3 gap-[20px] md:gap-[40px] lg:gap-[60px]">
          {speakersData.slice(0, 6).map((speaker, index) => (
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
