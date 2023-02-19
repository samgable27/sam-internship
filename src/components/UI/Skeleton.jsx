import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Skeleton as Skelly,
} from "@mui/material";
import "../../SkeletonTwo.css";
import { CardMedia } from "@mui/material";

const Skeleton = ({ loading, sellers }) => {
  return (
    <Card sx={{ m: 0, border: "none" }}>
      <CardContent sx={{ borderColor: "none" }}>
        {loading ? (
          <Skelly variant="circular" width={40} height={40} animation="wave" />
        ) : (
          <img src={sellers.authorImage} alt="" />
        )}
        {loading ? (
          <>
            <Skelly animation="wave" height={20} width="80%" />
            <Skelly animation="wave" height={20} width="40%" />
          </>
        ) : (
          <>
            <span>{sellers.authorName}</span>
            <span>{sellers.price}</span>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Skeleton;
