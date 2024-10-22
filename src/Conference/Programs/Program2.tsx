import React from "react";

export default function Program1() {
  // Define an array of program items
  const programItems = [
    {
      time: "07:00 AM",
      title:
        "Field/Facility Tour Morning Coffee and Networking Viewing of posters and exhibits",
    },
    {
      time: "08:00 AM",
      title: "Recap of Day 1",
    },
    {
      time: "08:30 AM",
      title:
        "Plenary Session 2: RCEF Outcomes, Impact, Success Stories, Innovations, and Future Directions ",
      speaker: "Sample Name A. Surname",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vulputate eros,",
    },
    {
      time: "10:00 AM",
      title: "Networking Break + viewing of posters and exhibits",
    },
    {
      time: "10:30 AM",
      title:
        "Panel Discussion 2: RCEF’s Innovations and Future Directions in Modernizing Rice Farming",
      speaker: "Sample Name A. Surname",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vulputate eros,",
    },
    {
      time: "12:00 NN",
      title: "Lunch Break",
    },
    {
      time: "01:30 PM",
      title:
        "Panel Discussion 2: RCEF’s Innovations and Future Directions in Modernizing Rice Farming",
      speaker: "Sample Name A. Surname",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vulputate eros,",
    },
    {
      time: "03:00 PM",
      title: "Networking Break + viewing of posters and exhibits",
    },
    {
      time: "03:30 PM",
      title: "Concurrent Sessions",
    },
    {
      time: "06:00 PM",
      title: "Welcome Dinner and Networking",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-4">
      {programItems.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-[1108px] h-auto py-8 bg-white mb-4 relative rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-[#EFB71E] text-white rounded-xl font-bold text-[18px] md:text-22px] lg:text-[35px] w-auto h-auto px-4 py-4 flex justify-center absolute top-[50px] left-0 transform -translate-x-1/2 -translate-y-1/2">
            {item.time}
          </div>
          <div className="flex flex-col justify-center pl-[72px] md:pl-[122px] lg:pl-[172px] pr-4">
            <div className="text-[18px] md:text-22px] lg:text-[35px] text-[#0E9046] font-bold">
              {item.title}
            </div>
            {item.speaker && (
              <div className="text-[14px] md:text-18px] lg:text-[22px] font-bold text-[#202020]">
                {/* Render speakers as bullet points if it's an array */}
                {Array.isArray(item.speaker) ? (
                  <ul className="list-disc pl-5">
                    {item.speaker.map((speaker, i) => (
                      <li key={i}>{speaker}</li>
                    ))}
                  </ul>
                ) : (
                  <div>{item.speaker}</div>
                )}
              </div>
            )}
            {item.description && (
              <div className="text-[14px] md:text-18px] lg:text-[22px] text-[#202020]">
                {item.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
