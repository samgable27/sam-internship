import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const AuthorCard = ({ authorQuery, author, loading }) => {
  return (
    <div className="nft__item">
      {authorQuery && (
        <div className="author_list_pp">
          <Link to="">
            <img className="lazy" src={authorQuery?.authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
      )}
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
        <Link to={`/item-details/${author?.nftId}`}>
          {loading ? (
            <Skeleton width={260} height={250} />
          ) : (
            <img
              src={author?.nftImage}
              className="lazy nft__item_preview"
              alt=""
            />
          )}
        </Link>
      </div>
      <div className="nft__item_info">
        <Link to="/item-details">
          <h4>{author?.title}</h4>
        </Link>
        <div className="nft__item_price">{author?.price} ETH</div>
        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          <span>{author?.likes}</span>
        </div>
      </div>
    </div>
  );
};
