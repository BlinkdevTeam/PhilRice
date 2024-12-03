import React, { useEffect, useState } from "react";
import "../App.css";

const TimeUnit = ({ value, label }: any) => (
  <div className="flex flex-col justify-center items-center mx-2">
    <p className="font-bold text-[30px] sm:text-[50px] md:text-[50px] lg:text-[80px] text-white timer-font">
      {value}
    </p>
    <p className="text-white text-[12px] sm:text-[15px] md:text-[15px] lg:text-[18px]">
      {label}
    </p>
  </div>
);

const TimeCount = () => {
  const targetDate = new Date("2024-12-03T07:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const distance = targetDate - Date.now();

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeRemaining({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    // <div className="flex flex-col items-center justify-center py-4 bg-green-700 rounded-lg w-full -px-2 sm:px-6 md:px-8 lg:px-12 xl:px-12 mx-auto">
    <>
      <div className="flex flex-col items-center justify-center bg-[#0E9046] rounded-lg w-[307px] h-[110px] sm:w-[457px] sm:h-[157px] md:w-[680px] md:h-[161px] lg:w-[1006px] lg:h-[232px]">
        <h1 className="text-center text-white text-[18px] md:text-[25px] lg:text-[32px] font-bold">
          Event Starts On
        </h1>
        <div className="flex flex-row justify-start text-[30px] sm:text-[50px] md:text-[50px] lg:text-[80px]">
          <TimeUnit value={timeRemaining.days} label="Days" />
          <p className="px-2 md:px-10 lg:px-6 xl:px-14 text-white font-bold -mt-1 md:-mt-2 lg:-mt-3">
            :
          </p>
          <TimeUnit
            value={String(timeRemaining.hours).padStart(2, "0")}
            label="Hours"
          />
          <p className="px-2 md:px-10 lg:px-6 xl:px-14 text-white font-bold -mt-1 md:-mt-2 lg:-mt-3">
            :
          </p>
          <TimeUnit
            value={String(timeRemaining.minutes).padStart(2, "0")}
            label="Minutes"
          />
          <p className="px-2 md:px-10 lg:px-6 xl:px-14 text-white font-bold -mt-1 md:-mt-2 lg:-mt-3">
            :
          </p>
          <TimeUnit
            value={String(timeRemaining.seconds).padStart(2, "0")}
            label="Seconds"
          />
        </div>
      </div>
    </>
  );
};

export default TimeCount;
