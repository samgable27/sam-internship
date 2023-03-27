import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { ShowCounter } from "./ShowCounter";

export const CountdownTimer = ({ targetDate }) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className="d-flex justify-content-end">
      <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
};
