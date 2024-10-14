import React from "react";
import HeroBanner from "../../Assets/36thbanner.jpg";

export default function ImageCollection() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 w-full h-auto">
      <div className="w-full md:w-1/2 lg:w-[889px] h-auto md:h-auto lg:h-[528px]">
        <img
          src={HeroBanner}
          className="w-full h-full object-cover"
          alt="Ugnay Palay Banner"
        />
      </div>

      <div className="flex flex-col w-full md:w-1/2 lg:w-[30%] h-[528px] gap-2">
        <div className="h-[200px] md:h-auto lg:h-[264px]">
          <img
            src={HeroBanner}
            className="w-full h-full object-cover"
            alt="Ugnay Palay Banner"
          />
        </div>
        <div className="h-[200px] md:h-auto lg:h-[264px]">
          <img
            src={HeroBanner}
            className="w-full h-full object-cover"
            alt="Ugnay Palay Banner"
          />
        </div>
      </div>
    </div>
  );
}
