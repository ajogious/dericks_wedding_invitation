import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import "./CountdownTimer.css";

function CountdownTimer() {
  const targetDate = new Date("2025-06-28T00:00:00");

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="counter_box">
      <div className="counter_box__contents">
        <div className="icon">
          <FontAwesomeIcon icon={faStopwatch} />
        </div>
        <div className="title">Countdown to 28th June</div>
        <div className="counter">
          {String(timeLeft.days).padStart(2, "0")}
          <span>D </span>
          {String(timeLeft.hours).padStart(2, "0")}
          <span>H</span> {String(timeLeft.minutes).padStart(2, "0")}
          <span>M</span> {String(timeLeft.seconds).padStart(2, "0")}
          <span>S</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
