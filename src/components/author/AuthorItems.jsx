import React from "react";
import { Link } from "react-router-dom";
import { AuthorCard } from "../UI/AuthorCard";
import { SkeletonTwo } from "../UI/SkeletonTwo";

const AuthorItems = ({ authorQuery, authorCards, loading }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {authorCards?.map((author) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              {loading ? (
                <SkeletonTwo
                  loading={loading}
                  author={author}
                  authorQuery={authorQuery}
                />
              ) : (
                <AuthorCard
                  loading={loading}
                  author={author}
                  authorQuery={authorQuery}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
