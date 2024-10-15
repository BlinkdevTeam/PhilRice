import React from "react";
import HeroBanner from "../../Assets/36thbanner.jpg";

export default function ImageCollection() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 w-full h-auto">
      <div className="w-full sm:w-full md:w-full lg:w-6/12 xl:w-4/12 h-[200px] md:h-auto lg:h-[528px] xl:h-[528px]">
        <img
          src={HeroBanner}
          className="w-full h-full object-cover"
          alt="Ugnay Palay Banner"
        />
      </div>

      <div className="flex flex-col w-full sm:w-full md:w-full lg:w-3/12 xl:w-4/12 lg:h-[528px] overflow-hidden gap-2">
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
