import React from "react";
import HeroBanner from "../../Assets/36thbanner.jpg";

export default function ImageCollection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 p-4 w-full max-w-[984.95px] h-auto md:h-1/12 lg:h-[666.08px]">
      <div className="col-span-1 row-span-2 bg-gray-300">
        <img
          src={HeroBanner}
          className="object-cover w-full h-full"
          alt="Ugnay Palay Banner"
        />
      </div>

      <div className="bg-gray-500">
        <img
          src={HeroBanner}
          className="object-cover w-full h-full"
          alt="Ugnay Palay Banner"
        />
      </div>

      <div className="bg-gray-600">
        <img
          src={HeroBanner}
          className="object-cover w-full h-full"
          alt="Ugnay Palay Banner"
        />
      </div>
    </div>
  );
}
