import { CardHeader } from "@mui/material";
import React from "react";
import { Skeleton as Skelly } from "@mui/material";

export const SkeletonTwo = ({ loading, items }) => {
  return (
    <div>
      <CardHeader
        sx={{
          flexDirection: "column",
        }}
        avatar={
          loading ? (
            <div className="p-2">
              <Skelly
                sx={{ transform: "translateX(-150%)" }}
                variant="circular"
                animation="wave"
                width={50}
                height={50}
              />
            </div>
          ) : (
            <img src={<img src={items.authorImage} />} />
          )
        }
        title={
          loading ? (
            <Skelly
              variant="rounded"
              animation="wave"
              height={350}
              width={250}
            />
          ) : (
            <img src={items.nftImage} />
          )
        }
        subheader={
          loading ? (
            <div className="flex-column align-items-center justify-content-center p-2">
              <Skelly sx={{ p: 1 }} animation="wave" height={10} width="40%" />
              <Skelly sx={{ p: 1 }} animation="wave" height={10} width="30%" />
            </div>
          ) : (
            <div>
              <span>{items.title}</span>
              <span>{items.itemode}items</span>
            </div>
          )
        }
      ></CardHeader>
    </div>
  );
};
