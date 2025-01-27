import React from "react";
import { Link } from "react-router-dom";
import { CountdownTimer } from "./CountdownTimer";

export const NftCard = ({ item, filteredItem, value }) => {
  const EXPIRATION_DATE = item?.expiryDate || filteredItem?.expiryDate;
  const dateTimeAfterExpiry = EXPIRATION_DATE;

  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
      <div className="nft__item">
        <div className="author_list_pp">
          <Link
            to={`/author/${item?.authorId || filteredItem?.authorId}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={value ? filteredItem?.authorId : item?.authorId}
          >
            <img
              className="lazy object-fit-contain img-responsive"
              src={value ? filteredItem?.authorImage : item?.authorImage}
              alt=""
            />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        {EXPIRATION_DATE && <CountdownTimer targetDate={dateTimeAfterExpiry} />}
        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
                <h4>Share</h4>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <Link to={`/item-details/${item?.nftId || filteredItem?.nftId}`}>
            <img
              src={value ? filteredItem?.nftImage : item?.nftImage}
              className="lazy nft__item_preview img-fluid"
              alt=""
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>{value ? filteredItem?.title : item?.title}</h4>
          </Link>
          <div className="nft__item_price">
            {value ? filteredItem?.price : item?.price} ETH
          </div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{value ? filteredItem?.likes : item?.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
