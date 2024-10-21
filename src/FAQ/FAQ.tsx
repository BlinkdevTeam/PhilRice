import React, { useState } from "react";
import LeafDivider from "../Assets/leaf.png";
import { questions } from "./questions"; // Adjust the path based on your file structure

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLinkClick = (event: any) => {
    event.preventDefault();
    console.log("Link clicked:", event.target.href);
    window.location.href = event.target.href;
  };

  return (
    <div className="flex flex-col justify-center items-center my-24 px-4 sm:px-4 lg:px-12">
      <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold">
        Frequently asked <span className="text-[#F3B71C]">questions</span>
      </div>
      <img
        src={LeafDivider}
        alt="Leaf Divider"
        className="my-4 w-full max-w-[300px]"
      />
      <div className="w-full max-w-[858px]">
        {questions.map((item, index) => (
          <div key={index} className="my-[12px]">
            <div
              className={`flex justify-between items-center font-bold text-[18px] md:text-[22px] lg:text-[25px] cursor-pointer p-4 transition-shadow duration-300 ease-in-out rounded-t-lg ${
                openIndex === index
                  ? "bg-[#0E9046] text-white shadow-lg"
                  : "bg-white text-[#0E9046] hover:shadow-lg"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.54163 18.0833C14.259 18.0833 18.0833 14.259 18.0833 9.54163C18.0833 4.82422 14.259 1 9.54163 1C4.82422 1 1 4.82422 1 9.54163C1 14.259 4.82422 18.0833 9.54163 18.0833Z"
                    stroke={openIndex === index ? "white" : "#0E9046"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.05591 6.97973C7.25673 6.40886 7.6531 5.92749 8.17482 5.62087C8.69655 5.31425 9.30995 5.20216 9.9064 5.30447C10.5028 5.40677 11.0438 5.71687 11.4336 6.17983C11.8233 6.64279 12.0366 7.22873 12.0357 7.83389C12.0357 9.54221 9.47319 10.3964 9.47319 10.3964"
                    stroke={openIndex === index ? "white" : "#0E9046"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5415 13.8125H9.55069"
                    stroke={openIndex === index ? "white" : "#0E9046"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2">{item.question}</span>
              </div>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="p-4 text-white bg-[#0E9046] rounded-b-lg text-[18px] md:text-[22px] lg:text-[25px]">
                {item.answer}
                {item.link && (
                  <a
                    href={item.link}
                    className="text-[#F3B71C] underline ml-2"
                    onClick={handleLinkClick}
                  >
                    this Link
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
