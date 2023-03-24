import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthorHeader } from "../components/UI/AuthorHeader";
import { AuthorCard } from "../components/UI/AuthorCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Author = () => {
  const { id } = useParams();
  const [authorQuery, setAuthorQuery] = useState({});
  const [authorCards, setAuthorCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const authorDetails = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
    );
    setAuthorQuery(data);
    setAuthorCards(data.nftCollection);
    setLoading(false);
  };

  useEffect(() => {
    authorDetails(id);
  }, [id]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile">
                  <AuthorHeader loading={loading} authorQuery={authorQuery} />
                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <div className="tab-1">
                          <div className="row">
                            {loading
                              ? new Array(8).fill(0).map((_, i) => (
                                  <div
                                    key={i}
                                    className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                                  >
                                    <Skeleton width={306} height={441} />
                                  </div>
                                ))
                              : authorCards?.map((author, index) => (
                                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <AuthorCard
                                      key={index}
                                      author={author}
                                      authorQuery={authorQuery}
                                      loading={loading}
                                    />
                                  </div>
                                ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
