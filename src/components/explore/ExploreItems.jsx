import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetFilterQuery } from "../../redux/features/apiSlice";

import { NftCard } from "../UI/NftCard";

const ExploreItems = ({ data, loading }) => {
  const cardPerRow = 8;
  const [next, setNext] = useState(cardPerRow);

  const loadMore = () => {
    setNext(next + cardPerRow / 2);
  };

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {data?.slice(0, next)?.map((item, id) => (
        <div
          className="d-flex col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{
            display: "block",
            backgroundSize: "cover",
          }}
        >
          <NftCard key={id} item={item} />
        </div>
      ))}

      <div className="col-md-12 text-center">
        <Link onClick={loadMore} to="" id="loadmore" className="btn-main lead">
          Load more
        </Link>
      </div>
    </>
  );
};

export default ExploreItems;
