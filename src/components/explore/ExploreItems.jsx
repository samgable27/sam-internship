import React from "react";
import { Link } from "react-router-dom";
import {
  useGetExploreQuery,
  useGetNewItemsQuery,
} from "../../redux/features/apiSlice";
import { setExplore } from "../../redux/features/exploreSlice";
import { setNewItems } from "../../redux/features/itemSlice";

import { NftCard } from "../UI/NftCard";

const ExploreItems = () => {
  const { data: exploreItems, isLoading } = useGetExploreQuery();
  let { data: item } = useGetNewItemsQuery();

  setNewItems(item);
  setExplore(exploreItems);
  console.log(exploreItems);

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
      <div
        className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
        style={{ display: "block", backgroundSize: "cover" }}
      >
        {exploreItems.map((item, index) => (
          <NftCard item={item} explore={exploreItems} />
        ))}
      </div>
      <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead">
          Load more
        </Link>
      </div>
    </>
  );
};

export default ExploreItems;
