import React from "react";
import { DateTimeDisplay } from "./DateTimeDisplay";
import "..//../css/styles/countdown.css";

export const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="absolute">
      <div className=" d-flex p-1 align-items-center justify-content-center bg-white border border-2 countdown__border rounded-pill">
        <DateTimeDisplay value={hours} type={"h"} />
        <DateTimeDisplay value={minutes} type={"m"} />
        <DateTimeDisplay value={seconds} type={"s"} />
      </div>
    </div>
  );
};
