import React from "react";

export const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="d-flex ml-1 text-sm">
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};
