import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../UI/Skeleton";
import AOS from "aos";
import "aos/dist/aos.css";

const TopSellers = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTopSellers() {
    setLoading(true);

    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
    );
    setSellers(data);
    setLoading(false);
  }

  useEffect(() => {
    getTopSellers();
  }, []);

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="1600"
            >
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12 wi">
            <ol className="author_list">
              {loading
                ? new Array(12)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton
                        sellers={sellers}
                        loading={loading}
                        key={index}
                      />
                    ))
                : sellers.map((seller, id) => (
                    <div
                      data-aos="flip-left"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="1200"
                    >
                      <li key={id}>
                        <div className="author_list_pp">
                          <Link to={`/author/${seller.authorId}`}>
                            <img
                              className="lazy pp-author"
                              src={seller.authorImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${seller.authorId}`}>
                            {seller.authorName}
                          </Link>
                          <span>{seller.price} ETH</span>
                        </div>
                      </li>
                    </div>
                  ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
