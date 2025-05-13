import { useCountdown } from "./useCountdown";

function TimeOnly({ targetDate }) {
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="counter text-center">
      <span>{String(timeLeft.days).padStart(2, "0")}D </span>
      <span>{String(timeLeft.hours).padStart(2, "0")}H </span>
      <span>{String(timeLeft.minutes).padStart(2, "0")}M </span>
      <span>{String(timeLeft.seconds).padStart(2, "0")}S</span>
    </div>
  );
}

export default TimeOnly;
