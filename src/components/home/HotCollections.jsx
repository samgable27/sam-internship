import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { SkeletonThree } from "../UI/SkeletonThree";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotCollections = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  const [loading, setLoading] = useState(true);

  const [cards, setCards] = useState([]);

  async function fetchHotCollections() {
    setLoading(true);
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    );
    setCards(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchHotCollections();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="text-center"
              data-aos="slide-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1800"
            >
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...settings}>
            {loading
              ? new Array(8)
                  .fill(0)
                  .map((_, index) => (
                    <SkeletonThree
                      key={index}
                      loading={loading}
                      cards={cards}
                    />
                  ))
              : cards.map((card, id) => (
                  <div
                    className="col-lg-12 col-md-8 col-sm-6 col-xs-12 mw-100 mh-100 "
                    data-aos="flip-down"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="1400"
                    key={id}
                  >
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <Link to={`/item-details/${card.nftId}`}>
                          <img
                            src={card.nftImage}
                            className="lazy mw-100 mh-100 img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nft_coll_pp">
                        <Link to={`/author/${card.authorId}`}>
                          <img
                            className="lazy pp-coll"
                            src={card.authorImage}
                            alt=""
                          />
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <Link to="/explore">
                          <h4>{card.title}</h4>
                          <span>{card.code}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
