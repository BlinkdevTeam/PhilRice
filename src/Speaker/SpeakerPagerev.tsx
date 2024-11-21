import React, { useEffect, useState } from "react";
import LeafDivider from "../Assets/leaf.png";
import SpeakerProfile1 from "./Profile/PlenarySession1";
import SpeakerProfile2 from "./Profile/PlenarySession2";
import SpeakerProfile3 from "./Profile/PlenarySession3";
import KeynoteSpeaker from "./Profile/KeynoteSpeaker";

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

  return (
    <div className="flex flex-col justify-center items-center px-4 w-screen my-24">
      <div className="text-[#0E9046] text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
        Speakers and <span className="text-[#F3B71C]">Panelists</span>
      </div>
      <img src={LeafDivider} alt="Leaf Divider" className="my-4" />

      {/* Accordion for Mobile */}
      <div className="flex flex-col lg:hidden w-full max-w-[800px] gap-8">
        {sessions.map((session, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="flex items-center justify-center w-full p-5 font-medium text-white border border-[#F3B71C] bg-[#F3B71C] rounded-lg"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-content-${index}`}>
              <span>
                {session.title}
                {session.subtitle && (
                  <span className="block text-sm">{session.subtitle}</span>
                )}
              </span>
              {/* <svg
                className={`w-4 h-4 transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg> */}
            </button>
            <div
              id={`accordion-content-${index}`}
              className={`${
                openIndex === index ? "block" : "hidden"
              } p-5 text-gray-500 dark:text-gray-400`}>
              {session.content}
            </div>
          </div>
        ))}
      </div>

      {/* Static Content for Desktop */}
      <div className="hidden lg:flex flex-col items-center w-full max-w-[800px]">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mb-20">
            <div className="font-bold text-center text-[#0E9046] text-[20px] md:text-[35px] lg:text-[40px]">
              {session.title}
            </div>
            {session.subtitle && (
              <div className="text-center text-gray-500 text-[16px] md:text-[20px] lg:text-[24px] mt-2">
                {session.subtitle}
              </div>
            )}
            <div className="mt-8 w-full">{session.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
