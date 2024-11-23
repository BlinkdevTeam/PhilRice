import React, { useState } from "react";
import Speaker1 from "../../Assets/Speakers/Web_Maharjan.png";
import Speaker2 from "../../Assets/Speakers/Web_Pelegrina.png";
import Speaker3 from "../../Assets/Speakers/Web_Obara.png";
import Modal from "../../Modal/SpeakerModal";

const speakersData = [
  {
    image: Speaker1,
    name: "Ms. Dianne Gail L. Maharjan",
    description: "Director, NEDA Innovation Staff",
    title: "National Innovation Agenda and Strategy Document 2023-2032",
    content:
      "Ms. Dianne Gail L. Maharjan currently serves a Director of the Innovation Staff of the National Economi and Development Authority (NEDA). With a tenure of 1 years at the national planning agency, she has playe a pivotal role in policy review, development planning and investment programming across various sectors including agriculture, climate change, environment, an natural resources. More recently, she has taken the rol of Executive Director of the National Innovation Counci Secretariat to provide technical and administrativ support to the NIC. The NIC has been entrusted wit developing the country’s innovation goals, identifyin priorities, and formulating a long-term strategy to remov barriers to innovation and enhance its governance Under her leadership, the National Innovation Agend Strategic Document (NIASD), a 10-year roadmap fo innovation as mandated by the Philippine Innovatio Act, was co-created with the private sector and wa approved by President Marcos during the NIC meeting on 20 June 2023. Ms. Maharja also leads the conduct of annual National Innovation Day, showcasing Filipino innovation in diverse sectors, such as food and agribusiness, health, education, transport an logistics, public administration, manufacturing and trade, finance, security, energy, blu economy, and water. This year’s Innovation Day highlighted the role of youth and student in innovation, where 140 schools nationwide participated in the design thinking workshop mini-hackathon. Further, she leads the administration of the innovation fund allocated fo both the public sector and private entrepreneurs, including micro, small, and mediu enterprises Ms. Maharjan finished her MSc in Environmental Science with a specialization i Environmental Planning and Management from the UNESCO-IHE, Delft, The Netherlands i 2014. She also earned a Master in Development Management and a BS in Agriculture, majo in Soil Science, from the University of the Philippines Los Baños in April 2010 and April 2002 respectively.",
  },
  {
    image: Speaker2,
    name: "Ms. Leilani D. Pelegrina",
    description: "Director, Crops Research Division <br> (DOST-PCAARRD)",
    title: "DOST-PCAARRD Rice Industry Strategic S&T Program",
    content:
      "Ms. Leilani D. Pelegrina is the Director of the Crops Research Division (CRD) of the DOST-Philippine Council for Agriculture, Aquatic, and Natural Resources Research and Development (DOST-PCAARRD). She is an expert in agricultural research management with over 15 years of experience. She graduated cum laude in BS in Agriculture (major in Horticulture) and earned her MS in Horticulture (major in Crop Production and Management, minor in Environmental Science) from UPLB. Currently, she is pursuing her PhD in Horticulture, with minors in Entomology, and Molecular Biology and Biotechnology at the same university. As the Director of CRD, she is responsible for overseeing the management, coordination, and setting the overall direction for DOST-PCAARRD’s national R&D initiatives in the crop sector. She also supervises the implementation of various research management activities in the same sector that are prioritized under the Council’s Industry Strategic S&T Program (ISP). One of her advocacies is to make R&D/ innovation outputs available and accessible to the intended stakeholders. Prior to her appointment as Director, she served as Section Head of CRD’s Program Monitoring and Evaluation and Program-Based Information System (PME-PBIS), ISP Manager for Vegetables and Abaca, and Commodity Specialist for Coffee. She also played a pivotal role in overseeing DOST-PCAARRD’s initiatives on other commodities that focus on fiber and industrial crops, papaya, sugarcane, and plant genetic resources (PGR). She has worked with international organizations such as the National Service of Agri-Food Health and Quality-Argentina, Australian Centre for International Agricultural Research, International Coconut Community, World Vegetable Center, Manila Economic and Cultural Office – Taipei Economic and Cultural Office, and Consultative Group on International Agricultural Research. Adding to her significant contributions in crops R&D, she served as the Vice President of the Crop Science Society of the Philippines (CSSP) for 2023-2024 and currently serves as the Society’s President for 2024-2025.",
  },
  {
    image: Speaker3,
    name: "Dr. Mitsuhiro Obara",
    description: "Senior Researcher <br> (JIRCAS)",
    title:
      "Introduction of Breeding Strategies to Reduce the Amount of Fertilizer Used in Rice Cultivation",
    content:
      "Dr. Mitsuhiro Obara is a Senior Researcher at th Biological Resources and Post-harvest Division of th Japan International Research Center for Agricultura Sciences (JIRCAS). His research interests and field o expertise span genetic variation, nitrogen use efficienc (NUE), physiological responses, and yield potential, all o which are integral to improving agricultural sustainabilit and enhancing crop productivity In 2002, he completed his doctoral degree at th Graduate School of Agricultural Sciences, Tohok University, after completing his Bachelor of Scienc and Master of Science in Applied Sciences in th University. He further advanced his research expertis through postdoctoral fellowships at the same university supported by the Japan Society for the Promotion o Science from 1999 to 2005, and by the Japan Scienc and Technology Agency from 2005 to 2007. Furthermore, he held several key research positions during his career. He was a visitin researcher in April 2003 to March 2005, in molecular biology at the Plant Science Center RIKEN. He then worked as a researcher in Biotechnology and Plant Breeding at the Iwat Biotechnology Research Center from April 2007 to March 2010. In April 2010, he joine JIRCAS as a researcher in plant physiology and genetics until March 2015, until he wa promoted to Senior Researcher Throughout his career, he has been recognized for his groundbreaking work. In 2019, h received the Poster Award at the 4th International Symposium on the Nitrogen Nutritio of Plants for his study on ammonium uptake in rice seedlings. He also earned th Encouragement Award from the Japan Society of Soil Science and Plant Nutrition in 201 for his research on nitrogen utilization in rice Currently, he has contributed to over 49 research papers, establishing himself as one o the leading researchers in the field of agricultural science. His pioneering research ha significantly advanced our understanding of plant nutrition, soil science, and crop breeding with a lasting impact on global agricultural practices.",
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

export default SpeakerProfiles;
