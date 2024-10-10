import React, { useEffect, useState } from "react";

const TimeUnit = ({ value, label }:any) => (
  <div className="flex flex-col items-center mx-2">
    <p className="font-bold text-7xl text-white">{value}</p>
    <p className="text-white text-lg">{label}</p>
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
    <div className="flex flex-col items-center justify-center p-4 bg-green-700 rounded-lg w-[1026px] h-25">
      <h1 className="text-center text-white text-3xl font-bold mb-4">
        Event Starts On
      </h1>
      <div className="flex flex-row justify-center">
        <TimeUnit value={timeRemaining.days} label="Days" />
        <p className="font-bold text-6xl text-white mx-4">:</p>
        <TimeUnit
          value={String(timeRemaining.hours).padStart(2, "0")}
          label="Hours"
        />
        <p className="font-bold text-6xl text-white mx-4">:</p>
        <TimeUnit
          value={String(timeRemaining.minutes).padStart(2, "0")}
          label="Minutes"
        />
        <p className="font-bold text-6xl text-white mx-4">:</p>
        <TimeUnit
          value={String(timeRemaining.seconds).padStart(2, "0")}
          label="Seconds"
        />
      </div>
    </div>
  );
};

export default TimeCount;
