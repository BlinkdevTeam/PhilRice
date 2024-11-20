import React from "react";

export default function Program1() {
  // Define an array of program items
  const programItems = [
    {
      time: "07:00 AM",
      title: "Registration of Participants and Welcome Coffee",
    },
    {
      time: "09:00 AM",
      title: "Opening Program",
      speaker: [
        "Doxology and National Anthem",
        "Welcome Remarks and Introduction of the Guest of Honor and Keynote Speaker",
        "Message of the Guest of Honor and Keynote Speaker",
        "Turnover of BPI Foundation Grant for the RiceBIS Community in Masbate",
        "Presentation of new DA-PhilRice knowledge products",
        "Opening and Viewing of Posters and Exhibits",
      ],
    },
    {
      time: "10:00 AM",
      title: "Networking break and viewing of posters and exhibits",
    },
    {
      time: "10:30 AM",
      title: "PLENARY SESSION 1. Cutting-edge Rice R4D Innovations",
      speaker: "Chair: Dr. Eduardo Jimmy P. Quilang",
    },
    {
      time: "10:30 AM",
      title: "Filipinnovation and its enabling environment",
      speaker: "Ms. Dianne Gail L. Maharjan",
      description: "Director, NEDA Innovation Staff",
    },
    {
      time: "10:50 AM",
      title: "DOST-PCAARRD’s R&D initiatives",
      speaker: "Ms. Leilani D. Pelegrina",
      description:
        "Director, Crops Research Division DOST-Philippine Council for Agriculture, Aquatic, and Natural Resources Research and Development (DOST-PCAARRD)",
    },
    {
      time: "11:10 AM",
      title: "JIRCAS R&D Thrusts",
      speaker: "Dr. Mitsuhiro Obara",
      description:
        "Senior  ResearcherJapan International Research Center for Agricultural Sciences (JIRCAS)",
    },
    {
      time: "11:30 AM",
      title: "Open Forum / Q&A",
    },
    {
      time: "12:00 NN",
      title: "Lunch Break",
    },
    {
      time: "01:30 PM",
      title: "PANEL DISCUSSION 1:  Scaling R4D Innovations",
      speaker: "Mr. Dindo King M. Donayre",
      description: [
        "Dr. Junel B. Soriano, DA-BAR",
        "Ms. Andrea Marie S. Dizon, Davao Beta Spring Inc.",
        "Mr. Ramon T. Lim, DA-PhilRice Trustee",
      ],
    },
    {
      time: "03:00 PM",
      title: "Networking Break + Viewing of Posters and Exhibits",
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
