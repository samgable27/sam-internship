import React from "react";
import { AuthorCard } from "../UI/AuthorCard";
import "..//..//Skeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AuthorItems = ({ authorQuery, authorCards, isLoading }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {authorCards?.map((author, idx) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={idx}>
              {isLoading ? (
                <Skeleton height={441} width={306} />
              ) : (
                <AuthorCard author={author} authorQuery={authorQuery} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
