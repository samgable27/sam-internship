import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "..//..//Skeleton.css";

export const AuthorHeader = ({ authorQuery, loading }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="de-flex-col">
        <div className="profile_avatar">
          {loading ? (
            <Skeleton circle width="150px" height="150px" />
          ) : (
            <img src={authorQuery?.authorImage} />
          )}
          <i className="fa fa-check absolute"></i>
          <div className="profile_name">
            <h4>
              {loading ? <Skeleton width="200px" /> : authorQuery?.authorName}
              <span className="profile_username">
                {loading ? <Skeleton width="50%" /> : authorQuery?.tag}
              </span>
              {loading ? (
                <Skeleton width="200px" height={15} />
              ) : (
                <div>
                  <span id="wallet" className="profile_wallet">
                    {authorQuery?.address}
                  </span>
                  <button id="btn_copy" title="Copy Text">
                    Copy
                  </button>
                </div>
              )}
            </h4>
          </div>
        </div>
      </div>

      <div className="profile_follow de-flex">
        {loading ? (
          <Skeleton width="200px" height={40} />
        ) : (
          <div className="de-flex-col">
            <div className="profile_follower">
              {!isFollowing
                ? authorQuery?.followers
                : authorQuery?.followers + 1}{" "}
              followers
            </div>
            {!isFollowing ? (
              <Link
                onClick={() => setIsFollowing(true)}
                to="#"
                className="btn-main"
              >
                Follow
              </Link>
            ) : (
              <Link
                onClick={() => setIsFollowing(false)}
                to="#"
                className="btn-main"
              >
                Unfollow
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
