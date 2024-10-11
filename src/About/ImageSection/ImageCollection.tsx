import React from "react";
import HeroBanner from "../../Assets/36thbanner.jpg";

export default function ImageCollection() {
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden gap-2 w-[1487px] h-[528px] bg-slate-800">
        <div className="w-full h-full">
          <img
            src={HeroBanner}
            className="w-full h-full object-cover"
            alt="Ugnay Palay Banner"
          />
        </div>

        <div className="flex flex-col overflow-hidden gap-2">
          <div className="w-full h-full">
            <img
              src={HeroBanner}
              className="w-full h-full object-cover"
              alt="Ugnay Palay Banner"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={HeroBanner}
              className="w-full h-full object-cover"
              alt="Ugnay Palay Banner"
            />
          </div>
        </div>
      </div>
    </>
  );
}
