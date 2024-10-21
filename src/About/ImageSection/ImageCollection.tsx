import React from "react";
import HeroBanner from "../../Assets/36thbanner.jpg";
import SampleImage1 from "../../Assets/SampleImages/Rectangle42.png";
import SampleImage2 from "../../Assets/SampleImages/Rectangle43.png";
import SampleImage3 from "../../Assets/SampleImages/Rectangle44.png";

export default function ImageCollection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 p-4 w-full max-w-[984.95px] h-auto md:h-1/12 lg:h-[666.08px]">
      <div className="col-span-1 row-span-2 bg-gray-300">
        <img
          src={SampleImage1}
          className="object-cover w-full h-full"
          alt="Ugnay Palay Banner"
        />
      </div>

      <div className="bg-gray-500">
        <img
          src={SampleImage2}
          className="object-cover w-full h-full"
          alt="Ugnay Palay Banner"
        />
      </div>

      <div className="bg-gray-600">
        <img
          src={SampleImage3}
          className="object-cover w-full h-full"
          alt="Ugnay Palay Banner"
        />
      </div>
    </div>
  );
}
