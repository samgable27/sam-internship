import React from "react";
import Countdown from "react-countdown";

export const CountdownCard = ({ item }) => {
  return (
    <div className="de_countdown">
      <Countdown date={item.expiryDate} intervalDelay={0} precision={3} />
    </div>
  );
};
