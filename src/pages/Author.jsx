import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AuthorItems from "../components/author/AuthorItems";
import { AuthorHeader } from "../components/UI/AuthorHeader";

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
                  <AuthorHeader authorQuery={authorQuery} />
                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      <AuthorItems
                        key={authorQuery.id || authorCards.id}
                        authorCards={authorCards}
                        authorQuery={authorQuery}
                        loading={loading}
                      />
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
