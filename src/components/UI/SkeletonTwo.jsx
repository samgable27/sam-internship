import React from "react";
import { Card, CardHeader, Skeleton as Skelly } from "@mui/material";
import "../../SkeletonTwo.css";

export const SkeletonTwo = ({ loading, cards }) => {
  return (
    <CardHeader
      sx={{
        display: "flex",
      }}
      title={
        loading ? (
          <Skelly variant="rounded" animation="wave" height={225} width={400} />
        ) : (
          <img src={cards.nftImage} />
        )
      }
      avatar={
        loading ? (
          <Skelly variant="circular" animation="wave" width={50} height={50} />
        ) : (
          <img src={cards.authorImage} />
        )
      }
      subheader={
        loading ? (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Skelly sx={{ p: 3 }} animation="wave" height={10} width="40%" />
            <Skelly sx={{ p: 2 }} animation="wave" height={10} width="20%" />
          </div>
        ) : (
          <div>
            <span>{cards.title}</span>
            <span>{cards.code}</span>
          </div>
        )
      }
    ></CardHeader>
  );
};
