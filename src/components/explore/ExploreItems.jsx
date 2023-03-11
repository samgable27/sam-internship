import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { NftCard } from "../UI/NftCard";
import { SkeletonTwo } from "../UI/SkeletonTwo";

const ExploreItems = ({ data }) => {
  const cardPerRow = 8;

  const [next, setNext] = useState(cardPerRow);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [filterQuery, setFilterQuery] = useState([]);

  const loadMore = () => {
    setNext(next + cardPerRow / 2);
  };

  useEffect(() => {
    filterNft(value);
  }, [value]);

  const filterNft = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${value}`
    );
    setFilterQuery(data);
    setLoading(false);
  };

  return (
    <>
      <div>
        <select
          onChange={(e) => setValue(e.target.value)}
          id="filter-items"
          defaultValue=""
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {value
        ? filterQuery?.slice(0, next).map((filteredItem, id) => (
            <div
              className="d-flex col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{
                display: "block",
                backgroundSize: "cover",
              }}
            >
              {loading ? (
                <SkeletonTwo loading={loading} />
              ) : (
                <NftCard value={value} key={id} filteredItem={filteredItem} />
              )}
            </div>
          ))
        : data?.slice(0, next).map((item, id) => (
            <div
              className="d-flex col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{
                display: "block",
                backgroundSize: "cover",
              }}
            >
              {loading ? (
                <SkeletonTwo loading={loading} />
              ) : (
                <NftCard key={id} item={item} />
              )}
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
