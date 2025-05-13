import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import "./CountdownTimer.css";
import { useCountdown } from "./useCountdown";

function CountdownTimer() {
  const timeLeft = useCountdown("2025-06-28T00:00:00");

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
          <span>H </span>
          {String(timeLeft.minutes).padStart(2, "0")}
          <span>M </span>
          {String(timeLeft.seconds).padStart(2, "0")}
          <span>S</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
