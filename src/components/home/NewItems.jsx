import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../Slider.css";
import { SkeletonTwo } from "../UI/SkeletonTwo";
import { NftCard } from "../UI/NftCard";
import { useGetNewItemsQuery } from "../../redux/features/apiSlice";
import { setNewItems } from "../../redux/features/itemSlice";

const NewItems = () => {
  const { data, isLoading } = useGetNewItemsQuery();
  setNewItems(data);

  console.log(data);

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...settings}>
            {isLoading
              ? new Array(7)
                  .fill(0)
                  .map((_, index) => (
                    <SkeletonTwo key={index} loading={isLoading} />
                  ))
              : data.map((item, id) => <NftCard key={id} item={item} />)}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
