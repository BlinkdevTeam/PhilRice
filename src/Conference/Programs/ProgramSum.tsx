import React from "react";
import Sched from "./day1-day3.png";

export default function ProgramSum() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={Sched}
        className="min-w-[500px] md:w-[80%] h-auto rotate-90 md:rotate-0 my-[160px] md:my-[100px]"
      />
    </div>
  );
}
