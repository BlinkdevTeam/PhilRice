import React from "react";

export default function Program1() {
  // Define an array of program items
  const programItems = [
    {
      time: "07:00 AM",
      title: [
        "Tour of DA-PhilRice Facilities",
        "Morning Coffee and Networking",
        "Viewing of posters and exhibits",
      ],
    },
    {
      time: "08:00 AM",
      title: "Recap of Day 1",
    },
    {
      time: "08:30 AM",
      title:
        "PLENARY SESSION 2. RCEF Outcomes, Impact, Success Stories, Innovations, and Future Directions",
      speaker: "Chair:  Dr. Victoria C. Lapitan",
    },
    {
      time: "08:30 AM",
      title:
        "Overview of RCEF’s Achievements and Initial Impact on the Rice Industry",
      speaker: "Engr. Christopher V. Morales, CESO II",
      description: "Undersecretary for Rice Industry Development, DA",
    },
    {
      time: "09:00 AM",
      title:
        "Evaluation and Case Studies: Key Service Delivery Mechanisms in the RCEF Implementation (progress results)",
      speaker: "Ms. Hazel A. Tanchuling",
      description: "Executive Director, Rice Watch Action Network",
    },
    {
      time: "09:30 AM",
      title: "Open Forum / Q&A",
    },
    {
      time: "10:00 AM",
      title: "Networking break and viewing of posters and exhibits",
    },
    {
      time: "10:30 PM",
      title:
        "PANEL DISCUSSION 2:  RCEF’s Innovations and Future Directions in Modernizing Rice Farming ",
      speaker: "Ms. Rhemilyn R. Sevilla ",
      description: [
        "Dr. Flordeliza H. Bordey, RCEF-Seed (DA-PhilRice)",
        "Engr. Remelyn R. Recoter, RCEF-Extension (DA-ATI)",
        "Ms. Rosalina S. Constantino, RCEF-Extension (TESDA)",
        "Mr. Joel V. Dator, RCEF-Mechanization (DA-PHilMech)",
        "Mr. Danilo D. Crobalde, RCEF-Credit (Landbank of the Philippines)",
        "Ms. Rallen O. Verdadero, RCEF-Credit (Development Bank of the Philippines) ",
      ],
    },
    {
      time: "12:00 NN",
      title: "Lunch Break",
    },
    {
      time: "01:30 PM",
      title:
        "PLENARY SESSION 3.  Co-creating the Future: Farmer-centered Innovations and Youth Empowerment",
      speaker: "Chair: Ms. Lea D. Abaoag",
    },
    {
      time: "01:30 PM",
      title:
        "Youth for Food Systems Transformation in the Philippines: Localizing Solutions for Resilience",
      speaker: "Ms. Christine F. Jodloman",
      description:
        "Director, Community Development and Programs AGREA Foundation",
    },
    {
      time: "01:50 PM",
      title: "Youth in Agriculture and Innovative Solutions ",
      speaker: "Ms. Irene B. Dumlao",
      description: "Assistant Secretary, DSWD",
    },
    {
      time: "02:10 PM",
      title:
        "Co-creating the Future: Farmer-centered Innovations and Youth Empowerment",
      speaker: "Ms. Joanne A. Valdez",
      description: "Founder, Candon Youth for Empowerment Movement Inc.",
    },
    {
      time: "02:30 PM",
      title: "Open Forum /Q&A",
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
      title: "Fellowship Dinner / Socials and Networking",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-4">
      {programItems.map((item, index) => (
        <div
          key={index}
          className="w-9/12 xl:w-full max-w-[1108px] h-auto md:py-8 bg-white mb-4 relative rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 overflow-hidden md:overflow-visible">
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
                    <div className="flex flex-col lg:flex-row gap-5 px-0">
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
