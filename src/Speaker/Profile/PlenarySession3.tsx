import React, { useState } from "react";
import Speaker1 from "../../Assets/Speakers/Web_Jodloman.png";
import Speaker2 from "../../Assets/Speakers/Web_Dumlao.png";
import Speaker3 from "../../Assets/Speakers/Web_Valdez.png";
import Modal from "../../Modal/SpeakerModal";

const speakersData = [
  {
    image: Speaker1,
    name: "Ms. Christine F. Jodloman",
    description:
      "Director, Community Development <br> and Programs <br> AGREA Foundation",
    title:
      "Youth for Food Systems Transformation in the Philippines: Localizing Solutions for Resilience",
    content:
      "Christine F. Jodloman is a dedicated agriculture advocate from a family of farmers in North Cotabato. She has 10 years of experience in development work in agriculture and currently serves as the Director of Community Development and Programs at AGREA Foundation. She has led multiple development projects in agriculture in the Philippines and Southeast Asia shaping her expertise on: inclusion of youth and women in agriculture, agriculture education, food systems mapping, and farmers' resilience programs focused on climate change mitigation and adaptation practices. Apart from her work in the Philippines, she’s also involved in international engagements and influencing being appointed as part of the 30 for 2030 by the UN Women Asia and Pacific, and as an Ambassador of the Next-Gen Agriculture Impact Network (NGIN). She finished Executive Masters in Disaster Risk and Crisis Management at the Asian Institute of Management, and her executive education on Futures Thinking and Public Policy at Lee Kuan Yew School at National University of Singapore, and Food Systems at Wageningen University and Research in the Netherlands. Recently, she was awarded as one of the winners of the Women in Ag Awards 2024 by DLG in Germany, a global award recognizing women's work in agriculture.",
  },
  {
    image: Speaker2,
    name: "Ms. Irene B. Dumlao",
    description: "Assistant Secretary, DSWD",
    title: "",
    content:
      "Ms. IRENE B. DUMLAO, MNSA, CESO IV, is the Assistant Secretary for Disaster Response Management Group and OSEC Concerns of the Department of Social Welfare and Development (DSWD).Before this, she served as the Assistant Secretary for Legislative Affairs. She assisted the Secretary in promoting DSWD's policies and programs in both Houses of Congress and in developing and implementing legislative advocacy plans and strategies. She is also the official Spokesperson and Data Protection Officer of the Department. Before being appointed as Assistant Secretary, she served as the Officer-in-Charge Director of the Social Marketing Service of DSWD. Asec. Dumlao started her government career in the DSWD in 2010 as Project Development Officer II of Pantawid Pamilyang Pilipino Program (4Ps) Regional Project Management Office (RPMO) at Field Office - Cordillera Administrative Region (FO -CAR). With her exemplary performance and unwavering dedication and commitment, she was promoted as Regional Program Coordinator/ Project Development Officer V in 2012. In 2018, she was appointed Director III/ Deputy Program Manager for Operations of 4Ps – National Program Management Office at the Central Office. In 2014, she started her Career Executive Service (CES) journey, and in February 2022, she was conferred with the rank of Career Executive Service Officer IV. A true-blue Louisian since elementary, she graduated with a Bachelor of Science from St. Louis University. She took her Masteral education at the University of the Philippines - Open University for Program Management. She recently completed her Master in National Security Administration at the National Defense College of the Philippines.",
  },
  {
    image: Speaker3,
    name: "Ms. Joanne A. Valdez",
    description: "Founder, Candon Youth for <br> Empowerment Movement Inc.",
    title:
      "Co-creating the Future: Farmer-centered Innovations and Youth Empowerment",
    content:
      "Joanne A. Valdez currently serves as a third-term council member for Candon City, Ilocos Sur. She contributes to committees on Gender and Development, Women and Family, and Education. Joanne’s work has been recognized with numerous awards and honors, including the JCI Ten Outstanding Young Persons of the World 2023 and The Outstanding Young Men of the Philippines 2022. She has been fortunate to be selected for prestigious fellowships such as the Young Southeast Asian Leaders Initiative, a program launched by the US government to empower emerging leaders in Southeast Asia, and Vital Voices’ Engage Program, a fellowship for outstanding women political leaders across the globe. Additionally, she was invited to be part of the global Network of Young Decision Makers, organized by Club de Madrid, an organization formed by former democratic Presidents and Prime Ministers. Joanne is the founder of the Candon Youth for Empowerment Movement (CYM), an organization that inspires volunteers to create positive change in their respective communities. Her advocacy work includes promoting gender and development, particularly youth and women’s empowerment, respecting Sexual Orientation and Gender Identity and Expression, HIV and AIDS prevention, community libraries, and youth in farming, among others. Together with CYM, they have reached over a hundred thousand young people through their advocacy work, particularly in peer mentoring and youth empowerment. Her expertise and insights have led her to speak at numerous conferences and events as a resource speaker, sharing her experiences and knowledge with others.",
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
