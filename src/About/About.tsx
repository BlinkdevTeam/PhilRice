import React from "react";
import LeafDivider from "../Assets/leaf.png";
import LeafDivider2 from "../Assets/leaf2.png";
import DOA from "../Assets/DOA.png";
import ImageCollection from "./ImageSection/ImageCollection";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center w-full  py-16 px-4 md:px-8">
        <div className="text-[#0E9046] text-6xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold">
          About the <span className="text-[#F3B71C]">Conference</span>
        </div>
        <img src={LeafDivider} alt="Leaf Divider" className="my-4" />
        <div className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl px-4 md:px-12 w-full sm:w-full md:w-full lg:w-10/12 xl:w-7/12 leading-relaxed">
          The 
          <span className="text-[#0E9046] font-bold">
            36th Ugnay Palay National Rice R4D Conference 
          </span>
          arrives at a crucial moment in the evolution of the Philippine rice
          industry. This year's theme,
          <span className="text-[#0E9046] font-bold">
            "Advancing Rice R4DE para sa Masaganang Bagong Pilipinas"
          </span>
           encapsulates DA-PhilRice's commitment to driving innovation,
          resilience, and sustainability in Philippine agriculture. It reflects
          the Institute’s dedication to placing farmers at the core of these
          advancements, ensuring their needs are met and their livelihoods are
          improved as they strive for greater productivity. <br />
          <br />
          This conference will serve as a pivotal platform for uniting
          stakeholders from across the rice sector—including researchers,
          scientists, policymakers, farmers, and industry partners—around a
          shared mission of transforming the industry. By focusing on harnessing
          cutting-edge advancements in rice research, technology, and
          development (R4D), the conference aims to build on the momentum
          initiated by the RCEF program, exploring ways to further elevate the
          productivity and market competitiveness of Filipino farmers and
          reinforce the Philippines' standing as a global rice industry leader.
          <br />
          <br />
          Through collaboration and innovation, DA-PhilRice is confident in
          securing a more resilient, sustainable, and food-secure future for all
          Filipinos. Together, we are working toward realizing a
          <span className="text-[#0E9046] font-bold">
             "Masaganang Bagong Pilipinas," 
          </span>
          where every Filipino enjoys a prosperous and secure life.
        </div>
        <button
          type="button"
          className="px-8 md:px-12 lg:px-16 py-2 md:py-3 lg:py-4 text-[#0E9046] text-xl md:text-2xl lg:text-3xl font-bold rounded-xl bg-white border-[2px] border-[#0E9046] my-6 md:my-8 lg:my-12"
        >
          Register
        </button>
        <ImageCollection />
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-24 overflow-hidden w-full sm:w-full md:w-full lg:w-9/12 xl:w-8/12 mt-12 py-12 lg:py-40">
          <div className="flex flex-col justify-start items-start w-full lg:w-auto">
            <div className="text-[#0E9046] text-start font-bold text-6xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
              About{" "}
              <span className="text-[#F3B71C]">
                <br />
                DA-PhilRice
              </span>
            </div>
            <div className="relative mt-8">
              <img
                src={DOA}
                alt="DOA Logo"
                className="w-auto ml-0 md:ml-8 lg:ml-12 xl:ml-12 mt-4"
              />
              <img
                src={LeafDivider2}
                alt="Divider"
                className="absolute top-0 left-0 -mt-11 "
              />
            </div>
          </div>
          <div className="w-full lg:w-[1005px] h-auto text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl text-start leading-relaxed p-4 md:p-8">
            The{" "}
            <span className="text-[#0E9046] font-bold">
              DA-PhilRice charter
            </span>{" "}
            established by Executive Order No. 1061 in November 1985, mandates
            the Institute to lead the national rice research for development and
            extension (R4DE) program. This initiative has been crucial in
            enhancing and sustaining rice production across the Philippines.
            Over the years, DA-PhilRice has worked closely with the Department
            of Agriculture (DA) and a broad network of collaborators—including
            state colleges and universities, local government units, the private
            sector, non-governmental organizations, and farmer groups—to uplift
            the nation’s rice farming communities. <br />
            <br />
            During the implementation of its Strategic Plan 2017-2022,
            DA-PhilRice successfully navigated numerous challenges and played a
            key role in the rollout of the Rice Competitiveness Enhancement Fund
            (RCEF). This initiative provided Filipino rice farmers with access
            to high-quality seeds, advanced farming technologies, mechanization,
            and comprehensive training programs. These measures were pivotal in
            modernizing rice farming practices, reducing production costs, and
            increasing yields, thereby enhancing the competitiveness of Filipino
            farmers in the global market. <br />
            <br />
            Building on these successes, DA-PhilRice is now set to implement its
            2023-2028 Strategic Plan, which focuses on leveraging advanced
            science and technology to create more prosperous and resilient rice
            farming communities. Central to this plan is a people-centric
            approach, aimed at improving the productivity, profitability, and
            well-being of farmers while ensuring the long-term sustainability
            and competitiveness of the rice industry.
          </div>
        </div>
      </div>
    </>
  );
}
