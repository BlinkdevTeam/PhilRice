import React from "react";
import LeafDivider from "../Assets/leaf.png";
import LeafDivider2 from "../Assets/leaf2.png";
import DOA from "../Assets/DOA.png";
import ImageCollection from "./ImageSection/ImageCollection";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center w-[1484px] h-auto">
        <div className="text-[#0E9046]">
          About the <span className="text-[#F3B71C]">Conference</span>
        </div>
        <img src={LeafDivider} alt="Leaf Divider" />
        <div>
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
          className="px-32 py-2 text-white rounded-md bg-[#0E9046]"
        >
          Register
        </button>
        <ImageCollection />
        <div className="flex justify-center items-center overflow-hidden w-[1500px] h-[632px] bg-gray-500">
          <div className="flex flex-col justify-start items-start">
            <div className="text-[#0E9046]">
              About <span className="text-[#F3B71C]">DA-PihlRice</span>
            </div>
            <img src={LeafDivider2} alt="Divider" />
            <img src={DOA} alt="DOA Logo" className="" />
          </div>
          <div className="flex flex-col overflow-hidden text-start bg-red-200">
            <div className="w-[1005px]">
              The <span className="text-[#0E9046]">DA-PhilRice charter</span>{" "}
              established by Executive Order No. 1061 in November 1985, mandates
              the Institute to lead the national rice research for development
              and extension (R4DE) program. This initiative has been crucial in
              enhancing and sustaining rice production across the Philippines.
              Over the years, DA-PhilRice has worked closely with the Department
              of Agriculture (DA) and a broad network of collaborators—including
              state colleges and universities, local government units, the
              private sector, non-governmental organizations, and farmer
              groups—to uplift the nation’s rice farming communities. <br />
              <br />
              During the implementation of its Strategic Plan 2017-2022,
              DA-PhilRice successfully navigated numerous challenges and played
              a key role in the rollout of the Rice Competitiveness Enhancement
              Fund (RCEF). This initiative provided Filipino rice farmers with
              access to high-quality seeds, advanced farming technologies,
              mechanization, and comprehensive training programs. These measures
              were pivotal in modernizing rice farming practices, reducing
              production costs, and increasing yields, thereby enhancing the
              competitiveness of Filipino farmers in the global market. <br />
              <br />
              Building on these successes, DA-PhilRice is now set to implement
              its 2023-2028 Strategic Plan, which focuses on leveraging advanced
              science and technology to create more prosperous and resilient
              rice farming communities. Central to this plan is a people-centric
              approach, aimed at improving the productivity, profitability, and
              well-being of farmers while ensuring the long-term sustainability
              and competitiveness of the rice industry.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}