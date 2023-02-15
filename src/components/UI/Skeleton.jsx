import React from "react";
import { Card, CardHeader, Skeleton as Skelly } from "@mui/material";

const Skeleton = ({ loading, sellers }) => {
  return (
    <CardHeader
      style={{ border: "1px solid white" }}
      avatar={
        loading ? (
          <Skelly variant="circular" width={40} height={40} animation="wave" />
        ) : (
          <img src={sellers.authorImage} alt="" />
        )
      }
      title={
        loading ? (
          <>
            <Skelly animation="wave" height={20} width="80%" />
            <Skelly animation="wave" height={20} width="40%" />
          </>
        ) : (
          <>
            <span>{sellers.authorName}</span>
            <span>{sellers.price}</span>
          </>
        )
      }
    ></CardHeader>
  );
};

export default Skeleton;
