import React from "react";
import LeafDivider from "../Assets/leaf.png";
import DOA from "../Assets/DOA.png";
import ImageCollection from "./ImageSection/ImageCollection";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center my-24">
        <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold">
          About the <span className="text-[#F3B71C]">Conference</span>
        </div>
        <img src={LeafDivider} alt="Leaf Divider" className="my-4" />
        <div className="text-[13px] md:text-[18px] lg:text-[22px] w-11/12 xl:w-9/12 leading-relaxed">
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
          className="w-[186px] lg:w-[265px] h-[47px] lg:h-[73px] text-[#0E9046] text-[20px] lg:text-[30px] font-bold rounded-xl bg-white border-[2px] border-[#0E9046] my-6 md:my-8 lg:my-12"
          onClick={() =>
            window.open(
              "https://ugnaypalay.philrice.gov.ph:441/csd/36th/registration-form/ABCDefgHI",
              "_blank"
            )
          }
        >
          Register
        </button>
        <div className="flex flex-col lg:flex-row">
          <ImageCollection />
          <div className="flex flex-col justify-center items-center w-full lg:w-auto">
            <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold">
              About{" "}
              <span className="text-[#F3B71C]">
                <br />
                DA-PhilRice
              </span>
            </div>
            <div className="relative mt-8">
              <img src={DOA} alt="DOA Logo" className="" />
            </div>
          </div>
        </div>
        <div className="text-[13px] md:text-[18px] lg:text-[22px] w-11/12 xl:w-9/12 leading-relaxed mt-12">
          The{" "}
          <span className="text-[#0E9046] font-bold">DA-PhilRice charter</span>{" "}
          established by Executive Order No. 1061 in November 1985, mandates the
          Institute to lead the national rice research for development and
          extension (R4DE) program. This initiative has been crucial in
          enhancing and sustaining rice production across the Philippines. Over
          the years, DA-PhilRice has worked closely with the Department of
          Agriculture (DA) and a broad network of collaborators—including state
          colleges and universities, local government units, the private sector,
          non-governmental organizations, and farmer groups—to uplift the
          nation’s rice farming communities. <br />
          <br />
          During the implementation of its Strategic Plan 2017-2022, DA-PhilRice
          successfully navigated numerous challenges and played a key role in
          the rollout of the Rice Competitiveness Enhancement Fund (RCEF). This
          initiative provided Filipino rice farmers with access to high-quality
          seeds, advanced farming technologies, mechanization, and comprehensive
          training programs. These measures were pivotal in modernizing rice
          farming practices, reducing production costs, and increasing yields,
          thereby enhancing the competitiveness of Filipino farmers in the
          global market. <br />
          <br />
          Building on these successes, DA-PhilRice is now set to implement its
          2023-2028 Strategic Plan, which focuses on leveraging advanced science
          and technology to create more prosperous and resilient rice farming
          communities. Central to this plan is a people-centric approach, aimed
          at improving the productivity, profitability, and well-being of
          farmers while ensuring the long-term sustainability and
          competitiveness of the rice industry.
        </div>
      </div>
    </>
  );
}
