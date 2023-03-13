import React from "react";

export const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="d-flex ml-1 text-dark">
      <span>{value}</span>
      <span>{type}</span>
    </div>
  );
};
