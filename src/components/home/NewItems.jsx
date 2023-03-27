import React, { useEffect } from "react";
import Slider from "react-slick";
import "../../Slider.css";
import { SkeletonTwo } from "../UI/SkeletonTwo";
import { NftCard } from "../UI/NftCard";
import { useGetNewItemsQuery } from "../../redux/features/apiSlice";
import AOS from "aos";
import "aos/dist/aos.css";

const NewItems = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { data, isLoading } = useGetNewItemsQuery();

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
          <div
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="1600"
          >
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              {isLoading
                ? new Array(7)
                    .fill(0)
                    .map((_, index) => (
                      <SkeletonTwo key={index} loading={isLoading} />
                    ))
                : data.map((item, id) => (
                    <div
                      data-aos="slide-up"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="1400"
                      className=""
                    >
                      <NftCard key={id} item={item} />
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
