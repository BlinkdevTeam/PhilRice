import React from "react";

export default function Program1() {
  // Define an array of program items
  const programItems = [
    {
      time: "6:30 AM",
      title: "Registration and Welcome Coffee",
    },
    {
      time: "6:30 AM",
      title: "Registration & Networking in Exhibit Booths",
    },
    {
      time: "6:30 AM",
      title: "Registration & Networking in Exhibit Booths",
      speaker: "Sample Name A. Surname",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vulputate eros.",
    },
    {
      time: "6:30 AM",
      title: "Registration & Networking in Exhibit Booths",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {programItems.map((item, index) => (
        <div
          key={index}
          className="w-[1108px] h-auto py-[32px] bg-white mb-4 relative"
        >
          <div className="bg-[#EFB71E] w-[192px] h-auto py-4 flex justify-center absolute top-0 mt-4 -ml-16">
            {item.time}
          </div>
          <div className="flex flex-col justify-center pl-[172px]">
            <div>{item.title}</div>
            {item.speaker && <div>{item.speaker}</div>}
            {item.description && <div>{item.description}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
