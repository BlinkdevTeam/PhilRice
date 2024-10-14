import React from "react";

export default function Program1() {
  // Define an array of program items
  const programItems = [
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
    <div className="flex flex-col justify-center items-center p-4">
      {programItems.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-[1108px] h-auto py-8 bg-white mb-4 relative rounded-lg shadow-md"
        >
          <div className="bg-[#EFB71E] text-white rounded-xl font-bold text-4xl w-auto h-auto px-4 py-4 flex justify-center absolute top-[50px] left-0 transform -translate-x-1/2 -translate-y-1/2">
            {item.time}
          </div>
          <div className="flex flex-col justify-center pl-[172px] pr-4">
            <div className="text-4xl text-[#0E9046] font-bold">
              {item.title}
            </div>
            {item.speaker && (
              <div className="text-2xl font-bold text-[#202020]">
                {item.speaker}
              </div>
            )}
            {item.description && (
              <div className="text-2xl text-[#202020]">{item.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
