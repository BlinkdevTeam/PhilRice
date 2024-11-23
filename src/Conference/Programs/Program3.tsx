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
        "Launch of DA-PhilRice Blockbuster Innovations: Dr. Karen Eloisa T. Barroga, Deputy Executive Director for Development, DA-PhilRice",
        "Synthesis: Mr. Joselito A. Kalaw, Head Corporate Services Division, DA-PhilRice",
        "Awarding of Best Papers and Posters",
        "Vote of thanks: Dr. John C. de Leon, Executive Director, DA-PhilRice",
        "DA-PhilRice Jingle: PalayMusika Chorale Ensemble",
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
          className="w-11/12 xl:w-full max-w-[1108px] h-auto md:py-8 bg-white mb-4 relative rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 overflow-hidden md:overflow-visible">
          <div className="bg-[#EFB71E] text-white md:rounded-xl font-bold text-[10px] md:text-[22px] lg:text-[22px] xl:text-[35px] w-auto h-auto px-4 py-2 md:py-4 flex md:justify-center md:absolute md:top-[50px] md:left-0 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            {item.time}
          </div>
          <div className="flex flex-col justify-center py-2 md:py-0 pl-[14px] md:pl-[122px] lg:pl-[172px] pr-4">
            <div className="text-[12px] md:text-[24px] lg:text-[28px] xl:text-[35px] text-[#0E9046] font-bold">
              {item.title}
            </div>
            {item.speaker && (
              <div className="text-[10px] md:text-[18px] lg:text-[22px] xl:text-[22px] font-bold text-[#202020]">
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
              <div className="text-[9px] md:text-18px] lg:text-[22px] text-[#202020]">
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
