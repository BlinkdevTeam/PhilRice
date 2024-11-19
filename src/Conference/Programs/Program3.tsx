import React from "react";

export default function Program1() {
  // Define an array of program items
  const programItems = [
    {
      time: "07:00 AM",
      title: [
        "Morning Coffee and Networking",
        "Viewing of posters and exhibits",
      ],
    },
    {
      time: "08:00 AM",
      title: "Recap of Day 1 & 2",
    },
    {
      time: "08:30 PM",
      title:
        "PANEL DISCUSSION 3. Bridging Generations: Collaboration between Farmers and Youth",
      speaker: "Ms. Mary Grace M. Nidoy ",
      description: [
        "Mr. Vincent Roy P. Mendoza, Farmvocacy PH",
        "Mr. Ruel Amparo, Cropital",
        "Mr. Glenn Garry F. Ayuste, Agri MD Farm Implements Company",
        "Mr. Rizal G. Corales, DA-PhilRice RCEF-PMO",
      ],
    },
    {
      time: "10:00 AM",
      title: "Networking break and viewing of posters and exhibits",
    },
    {
      time: "10:30 AM",
      title: "CLOSING PROGRAM",
      speaker: [
        "Master of Ceremonies:	 Ms. Leylani M. Juliano",
        "Synthesis: Mr. Joselito A. Kalaw Head, Corporate Services Division, DA-PhilRice",
        "Awarding of Best Papers and Posters",
        "Vote of thanks: Dr. John C. de Leon Executive Director, DA-PhilRice",
      ],
    },
    {
      time: "12:00 NN",
      title: "Lunch Break",
    },
    {
      time: "01:30 PM",
      title: "Departure of participants",
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
              {Array.isArray(item.title) ? (
                <ul>
                  {item.title.map((title, i) => (
                    <li key={i}>{title}</li>
                  ))}
                </ul>
              ) : (
                <div>{item.title}</div>
              )}
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
                {/* Render speakers as bullet points if it's an array */}
                {Array.isArray(item.description) ? (
                  <>
                    <div className="flex flex-col lg:flex-row gap-5">
                      <div className="">Panelist: </div>
                      <ul className="list-disc pl-5 font-bold">
                        {item.description.map((description, i) => (
                          <li key={i}>{description}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div>{item.description}</div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
