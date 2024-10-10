import React from "react";
import HeroBanner from "../../Assets/36thbanner.jpg";

export default function ImageCollection() {
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden w-[1487px] h-[528px] bg-slate-800">
        <div className="">
          <img
            src={HeroBanner}
            className="h-auto max-w-full"
            alt="Ugnay Palay Banner"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <img
            src={HeroBanner}
            className="h-auto max-w-full"
            alt="Ugnay Palay Banner"
          />
          <img
            src={HeroBanner}
            className="h-auto max-w-full"
            alt="Ugnay Palay Banner"
          />
        </div>
      </div>
    </>
  );
}
