import React from "react";

export const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="d-flex ml-1 text-dark fw-bold">
      <span>{value}</span>
      <span>{type}</span>
    </div>
  );
};
