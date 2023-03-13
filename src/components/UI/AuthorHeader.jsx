import React from "react";
import { Link } from "react-router-dom";

export const AuthorHeader = ({ authorQuery }) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="de-flex-col">
        <div className="profile_avatar">
          <img src={authorQuery?.authorImage} alt="" />
          <i className="fa fa-check"></i>
          <div className="profile_name">
            <h4>
              {authorQuery?.authorName}
              <span className="profile_username">@{authorQuery?.tag}</span>
              <span id="wallet" className="profile_wallet">
                {authorQuery?.address}
              </span>
              <button id="btn_copy" title="Copy Text">
                Copy
              </button>
            </h4>
          </div>
        </div>
      </div>
      <div className="profile_follow de-flex">
        <div className="de-flex-col">
          <div className="profile_follower">
            {authorQuery?.followers} followers
          </div>
          <Link to="#" className="btn-main">
            Follow
          </Link>
        </div>
      </div>
    </div>
  );
};
