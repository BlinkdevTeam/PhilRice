import React, { useState } from "react";
import LeafDivider from "../Assets/leaf.png";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "When and where is the conference taking place?",
      answer:
        "The conference will take place on November 15, 2024, at the Downtown Convention Center.",
    },
    {
      question: "What is the conference agenda?",
      answer:
        "The agenda will be released closer to the date. Please check back for updates.",
    },
    {
      question: "How can I register for the conference?",
      answer: "You can register online through our website.",
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-[#0E9046]">
          Frequently asked <span className="text-[#F3B71C]">questions</span>
        </div>
        <img src={LeafDivider} alt="Leaf Divider" />
        <div className="text-center w-[866px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
          vulputate eros, et <br />
          faucibus velit. Donec sed elit tellus.
        </div>

        <div className="w-full">
          {questions.map((item, index) => (
            <div key={index} className="w-full my-[24px]">
              <div
                className={`flex justify-between items-center cursor-pointer p-4 transition-shadow duration-300 ease-in-out ${
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
              {openIndex === index && (
                <div className="p-4 text-white bg-[#0E9046]">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
