import React from "react";
import { DateTimeDisplay } from "./DateTimeDisplay";

export const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="d-flex absolute align-items-center">
      <DateTimeDisplay value={hours} type={"h"} />
      <DateTimeDisplay value={minutes} type={"m"} />
      <DateTimeDisplay value={seconds} type={"s"} />
    </div>
  );
};
