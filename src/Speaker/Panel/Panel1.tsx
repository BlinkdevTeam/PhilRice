import React, { useState } from "react";
import Speaker1 from "../../Assets/Panels/Panel1/WEB_PD1_Soriano.png";
import Speaker2 from "../../Assets/Panels/Panel1/WEB_PD1_Dizon.png";
import Speaker3 from "../../Assets/Panels/Panel1/WEB_PD1_Lim.png";
import Speaker4 from "../../Assets/Panels/Panel1/WEB_PD1_Barroga.png";

import PanelModal from "../../Modal/PanelModal";
import "../speakerpage.css";

const speakersData = [
  {
    image: Speaker1,
    name: "Dr. Junel B. Soriano",
    description: "DA-BAR",
    title: "",
    content:
      "Dr. Junel B. Soriano, the current Director of the Department of Agriculture – Bureau of Agricultural Research (DA-BAR), has dedicated his career to advancing the agriculture sector. Known for his expertise in management, academia, agricultural research and extension, and community service, he exemplifies true servant leadership. He holds a PhD in Agricultural Engineering from Central Luzon State University and BS / MS in Agricultural Engineering from Tarlac Agricultural University. As DA-BAR Director, he has introduced strategies and reforms aligned with the DA’s OneDA Reform Agenda. To enhance R4DE benefits for the agri-fishery sector, he strengthened the Bureau’s transformative R4DE agenda, emphasizing the importance of technology scaling for impact. His initiatives have emphasized the need to translate agri-fishery R4DE projects into policy, leading to the institutionalization of a research-to-policy for development and extension approach. Dr. Soriano has also established a strong direction for adaptive strategies and innovations within the Bureau, creating the Agriculture and Fisheries Resources, Research and Extension for Development Network; launching the Research Talk and Online Seminar Series; establishing the DA-BAR Innovation Hub and Digital Kiosk; and implementing new project management resources such as grants, monitoring manuals, and strategic communication plans. He developed new R4D programs focused on soil health, climate-resilient and digital agriculture, rainwater harvesting, upland farming, and sustainable food systems. He expanded local and international partnerships and proposed the establishment of DA-BAR extension offices in five regions. Additionally, he introduced the Sustainable Challenge Award to recognize impactful community R&D initiatives supported by the Bureau. He had been OIC-Assistant Director at the DA-Bureau of Soils and Water Management, Program Director for the Rice Competitiveness Enhancement Fund Mechanization, Technical Adviser at DA-Office of the Secretary, Visiting Scientist at the India-based International Crops Research Institute for the Semi-Arid Tropics, and Vice President for Research, Extension, and Training at Bulacan Agricultural State College. He began his career as a hydrologist and researcher at DA-National Irrigation Administration and became a recognized ASEAN engineer in 2012. He received the Presidential Lingkod Bayan Region 2 Award (2018 and 2019), and the CSC PAGASA Award for Outstanding Public Employee (2010). As a Fulbright Research Fellow, he conducted research on rice cultivar responses to diverse water regimes and soil textures at Texas A&M University, USA. He has also served as national president of the Philippine Society of Agricultural Engineers and as Vice President of Young Engineers of the Philippines.",
  },
  {
    image: Speaker2,
    name: "Ms. Andrea Marie S. Dizon",
    description: "Davao Beta Spring Inc.",
    title: "",
    content:
      "Ms. Andrea Marie S. Dizon is a respected professional in the Philippine metalworking and manufacturing industries, recognized for her contributions and advocacy for locally-made products. She graduated with honors from UP Diliman’s College of Architecture and gained experience working in Singapore for four years early in her career. She holds various leadership roles that emphasize her influence and dedication to the industry’s growth and development. She has over 10 years of experience as Assistant Vice President for Operations and Administration of Davao Beta Spring Inc., focusing on agri-equipment fabrication and manufacturing. As the Managing Partner of Agri MD Farm Implements, she leads a team in developing locally-made agricultural equipment. She is also involved in the electric-powered transportation sector as a partner of BM111 Powersports, dealing with electric scooters and bikes. Andrea serves as the National Secretary of the Metalworking Industries Association of the Philippines (MIAP) and is also the President of MIAP Davao Chapter. She represents the Mindanao Agricultural Machineries Industries Association (MAMIA) in various national committees, advocating for local manufacturing standards and policies. She is also actively involved in drafting Philippine National Standards (PNS). Her role in the Technical Working Group of the Philippine Council for Agriculture and Fisheries (PCAF) on Policy Agenda Setting highlights her commitment to industry standards and quality. Andrea champions the locally-made combine harvester of the DA-PhilRice and aims to establish a consortium within MIAP and MAMIA to mass-produce this machine. Her efforts are directed toward promoting import substitution and complementing local sustainability efforts. Her extensive involvement in various sectors and leadership in key industry associations underscore her pivotal role in advancing the Philippine metalworking and manufacturing industries. Her advocacy work and initiatives are crucial in driving the industry toward greater self-sufficiency and innovation.",
  },
  {
    image: Speaker3,
    name: "Mr. Ramon T. Lim",
    description: "DA-PhilRice Trustee",
    title: "",
    content:
      "Mr. Ramon T. Lim serves as chairman of eight companies spanning industries such as real estate, hog and poultry farming, services, and trading. Alongside his chairmanship roles, he is also a director for three companies within the poultry sector. He is also the President of Mariposa Ricemill Inc. for 35 years now and is currently a member of the Board of Trustees of DA-PhilRice, representing the agribusiness sector. He earned his Bachelor’s degree in Management from the Ateneo de Manila University.",
  },
  {
    image: Speaker4,
    name: "Dr. Karen Eloisa T. Barroga",
    description: "DA-PhilRice",
    title: "",
    content:
      "Dr. Karen Eloisa R. Tanzo-Barroga, Deputy Executive Director for Development of the Department of Agriculture-Philippine Rice Research Institute (DA-PhilRice), is a driving force behind the Institute’s development interventions. Under her guidance, DA-PhilRice RCEF Extension has equipped its beneficiaries with essential knowledge and skills in rice production, and the DA-PhilRice stations has been able to implement technology scaling in their areas of responsibilities. Recognizing the importance of market-oriented agriculture, she has pushed for GAP certification to ensure quality rice production and guides the Institute’s RiceBIS 2.0 Program, which links farmers to markets. Dr. Barroga has led/co-led numerous groundbreaking projects, including the promotion of hybrid rice, certified inbred seeds, and Golden Rice, and the Be RICEponsible campaign. Her work on the PalayCheck System has significantly enhanced learning of science-based farming. She also played a pivotal role in developing an innovative training program which has nurtured a new generation of extension professionals branded as AgRiDOC. Her contributions have been recognized within DA-PhilRice and by other organizations, and she has also served in various leadership roles, nationally and internationally. Dr. Barroga holds a Ph.D. from the University of Western Australia, a Master’s degree in Development Management from the Development Academy of the Philippines, and a Master and Bachelor of Science degrees in Development Communication from UP Los Baños. She has recently completed the Executive Masterclass from the Asian Institute of Digital Transformation.",
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
      <div className="md:hidden min-h-[400px] px-9 flex justify-center items-start mt-[100px]">
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
