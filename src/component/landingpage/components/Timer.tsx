import React, { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const calculateTimeLeft = () => {
    const countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.days < 0) {
    return <div className="timer">EXPIRED</div>;
  }

  return (
    <div className="  md:w-fit gap-x-12 text-xl m-auto flex flex-row items-center justify-center md:justify-start">
      <div className="flex justify-center items-center flex-col flex-wrap">
        <div>{timeLeft.days}</div>
        <div className="text-sm md:text-xl font-semibold">Days</div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div>{timeLeft.hours}</div>
        <div className="text-sm md:text-xl font-semibold">Hours</div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div>{timeLeft.minutes}</div>
        <div className="text-sm md:text-xl font-semibold">Minutes</div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div>{timeLeft.seconds}</div>
        <div className="text-sm md:text-xl font-semibold">Seconds</div>
      </div>
    </div>
  );
};

export default Timer;
