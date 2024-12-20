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
      "Ms. Dianne Gail L. Maharjan currently serves as Director of the Innovation Staff of the National Economic and Development Authority (NEDA). With a tenure of 16 years at the national planning agency, she has played a pivotal role in policy review, development planning, and investment programming across various sectors, including agriculture, climate change, environment, and natural resources. More recently, she has taken the role of Executive Director of the National Innovation Council Secretariat to provide technical and administrative support to the NIC. The NIC has been entrusted with developing the country’s innovation goals, identifying priorities, and formulating a long-term strategy to remove barriers to innovation and enhance its governance. Under her leadership, the National Innovation Agenda Strategic Document (NIASD), a 10-year roadmap for innovation as mandated by the Philippine Innovation Act, was co-created with the private sector and was approved by President Marcos during the NIC meeting on 20 June 2023. Ms. Maharjan also leads the conduct of annual National Innovation Day, showcasing Filipino innovations in diverse sectors, such as food and agribusiness, health, education, transport and logistics, public administration, manufacturing and trade, finance, security, energy, blue economy, and water. This year’s Innovation Day highlighted the role of youth and students in innovation, where 140 schools nationwide participated in the design thinking workshop/ mini-hackathon. Further, she leads the administration of the innovation fund allocated for both the public sector and private entrepreneurs, including micro, small, and medium enterprises. Ms. Maharjan finished her MSc in Environmental Science with a specialization in Environmental Planning and Management from the UNESCO-IHE, Delft, The Netherlands in 2014. She also earned a Master in Development Management and a BS in Agriculture, major in Soil Science, from the University of the Philippines Los Baños in April 2010 and April 2002, respectively.",
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
      "Green Asia Project of JIRCAS for Development of Sustainable Food Systems in the Asia-Monsoon Region",
    content:
      "Dr. Mitsuhiro Obara is a Senior Researcher at the Biological Resources and Post-harvest Division of the Japan International Research Center for Agricultural Sciences (JIRCAS). His research interests and field of expertise span genetic variation, nitrogen use efficiency (NUE), physiological responses, and yield potential, all of which are integral to improving agricultural sustainability and enhancing crop productivity. In 2002, he completed his doctoral degree at the Graduate School of Agricultural Sciences, Tohoku University, after completing his Bachelor of Science and Master of Science in Applied Sciences in the University. He further advanced his research expertise through postdoctoral fellowships at the same university, supported by the Japan Society for the Promotion of Science from 1999 to 2005, and by the Japan Science and Technology Agency from 2005 to 2007. Furthermore, he held several key research positions during his career. He was a visiting researcher in April 2003 to March 2005, in molecular biology at the Plant Science Center, RIKEN. He then worked as a researcher in Biotechnology and Plant Breeding at the Iwate Biotechnology Research Center from April 2007 to March 2010. In April 2010, he joined JIRCAS as a researcher in plant physiology and genetics until March 2015, until he was promoted to Senior Researcher. Throughout his career, he has been recognized for his groundbreaking work. In 2019, he received the Poster Award at the 4th International Symposium on the Nitrogen Nutrition of Plants for his study on ammonium uptake in rice seedlings. He also earned the Encouragement Award from the Japan Society of Soil Science and Plant Nutrition in 2012 for his research on nitrogen utilization in rice. Currently, he has contributed to over 49 research papers, establishing himself as one of the leading researchers in the field of agricultural science. His pioneering research has significantly advanced our understanding of plant nutrition, soil science, and crop breeding, with a lasting impact on global agricultural practices.",
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
    <div className="min-h-auto mt-[40px] px-9 flex flex-wrap items-center justify-center">
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
