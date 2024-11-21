import React, { useEffect, useState } from "react";
import LeafDivider from "../Assets/leaf.png";
import SpeakerProfile1 from "./Profile/PlenarySession1";
import SpeakerProfile2 from "./Profile/PlenarySession2";
import SpeakerProfile3 from "./Profile/PlenarySession3";
import KeynoteSpeaker from "./Profile/KeynoteSpeaker";
import MobileP1 from "./Profile/MobilePlenary1";
import MobileP2 from "./Profile/MobilePlenary2";
import MobileP3 from "./Profile/MobilePlenary3";
import MobileKeynote from "./Profile/MobileKeynote";
import "./speakerpage.css";

export default function SpeakerPagerev() {
  const [openIndex, setOpenIndex] = useState(null); // For accordion

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
  };

  const sessions = [
    {
      title: "Keynote Speaker",
      content: <KeynoteSpeaker />,
    },
    {
      title: "Plenary Session 1",
      subtitle: "Cutting-edge Rice R4D Innovations",
      content: <SpeakerProfile1 />,
    },
    {
      title: "Plenary Session 2",
      subtitle: "Cutting-edge Rice R4D Innovations",
      content: <SpeakerProfile2 />,
    },
    {
      title: "Plenary Session 3",
      subtitle: "Cutting-edge Rice R4D Innovations",
      content: <SpeakerProfile3 />,
    },
  ];

  const mobilesessions = [
    {
      title: "Keynote Speaker",
      content: <MobileKeynote />,
    },
    {
      title: "Plenary Session 1",
      subtitle: "Cutting-edge Rice R4D Innovations",
      content: <MobileP1 />,
    },
    {
      title: "Plenary Session 2",
      subtitle: "Cutting-edge Rice R4D Innovations",
      content: <MobileP2 />,
    },
    {
      title: "Plenary Session 3",
      subtitle: "Cutting-edge Rice R4D Innovations",
      content: <MobileP3 />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 w-screen my-24">
      <div className="text-[#0E9046] text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
        Speakers and <span className="text-[#F3B71C]">Panelists</span>
      </div>
      <img
        src={LeafDivider}
        alt="Leaf Divider"
        className="my-4 w-[90%] md:w-auto transform transition-transform duration-300 hover:scale-110"
      />

      {/* Accordion for Mobile */}
      <div className="flex flex-col lg:hidden w-full max-w-[800px] gap-8">
        {mobilesessions.map((mobilesession, index) => {
          // Generate a unique class name based on the index
          const mobilesessionClass = `mobilesession-${index}`;

          return (
            <div key={index} className={`border-b ${mobilesessionClass}`}>
              <button
                className={`flex items-center justify-center w-full p-5 font-medium text-white border border-[#F3B71C] bg-[#F3B71C] rounded-lg ${mobilesessionClass}-button`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-content-${index}`}>
                <span>
                  {mobilesession.title}
                  {mobilesession.subtitle && (
                    <span className="block text-sm">
                      {mobilesession.subtitle}
                    </span>
                  )}
                </span>
              </button>
              <div
                id={`accordion-content-${index}`}
                className={`${
                  openIndex === index ? "block" : "hidden"
                } ${mobilesessionClass}-content`}>
                {mobilesession.content}
              </div>
            </div>
          );
        })}
      </div>

      {/* Static Content for Desktop */}
      <div className="hidden lg:flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[#0E9046] text-[20px] md:text-[35px] lg:text-[40px] mt-20">
            Keynote Speaker
          </div>
          <div>
            <KeynoteSpeaker />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center -mt-[200px] md:mt-0 lg:mt-0">
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px]">
            <span className="text-[#0E9046]">Plenary Session 1</span>
            <br />
            Cutting-edge Rice R4D Innovations
          </div>
          <div className="mt-[300px] md:mt-[80px] lg:mt-[60px] xl:mt-[80px]">
            <SpeakerProfile1 />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[100px] md:mt-[200px] lg:mt-[200px] xl:mt-[80px]">
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px]">
            <span className="text-[#0E9046]">Plenary Session 2</span>
            <br />
            Cutting-edge Rice R4D Innovations
          </div>
          <div className="mt-[100px] md:mt-[80px] lg:mt-[60px] xl:mt-[80px]">
            <SpeakerProfile2 />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-0 md:mt-[200px] lg:mt-[200px] xl:mt-[80px]">
          <div className="font-bold text-center px-16 text-[20px] md:text-[35px] lg:text-[40px]">
            <span className="text-[#0E9046]">Plenary Session 3</span>
            <br />
            Cutting-edge Rice R4D Innovations
          </div>
          <div className="mt-[100px] md:mt-[80px] lg:mt-[60px] xl:mt-[80px]">
            <SpeakerProfile3 />
          </div>
        </div>
      </div>
    </div>
  );
}
