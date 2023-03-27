import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EthImage from "../images/ethereum.svg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ItemDetails = () => {
  const { id } = useParams();

  const [itemDetailQuery, setItemDetailQuery] = useState({});
  const [loading, setLoading] = useState(true);

  const nftDetailQuery = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`
    );
    setItemDetailQuery(data);
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    nftDetailQuery(id);
  }, [id]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                {loading ? (
                  <Skeleton width="100%" height="100%" />
                ) : (
                  <img
                    src={itemDetailQuery?.nftImage}
                    className="img-fluid img-rounded mb-sm-30 nft-image"
                    alt=""
                  />
                )}
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>
                    {loading ? (
                      <Skeleton width={300} height="100%" />
                    ) : (
                      itemDetailQuery?.title
                    )}
                  </h2>
                  {loading ? (
                    <Skeleton width={150} height={25} />
                  ) : (
                    <div className="item_info_counts">
                      <div className="item_info_views">
                        <i className="fa fa-eye"></i>
                        {itemDetailQuery?.views}
                      </div>
                      <div className="item_info_like">
                        <i className="fa fa-heart"></i>
                        {itemDetailQuery?.likes}
                      </div>
                    </div>
                  )}
                  <div className="mt-3">
                    <p>
                      {loading ? (
                        <Skeleton width="100%" height={100} />
                      ) : (
                        itemDetailQuery?.description
                      )}
                    </p>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${itemDetailQuery?.ownerId}`}>
                            {loading ? (
                              <Skeleton circle width={50} height={50} />
                            ) : (
                              <img
                                className="lazy"
                                src={itemDetailQuery?.ownerImage}
                                alt=""
                              />
                            )}
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${itemDetailQuery?.ownerId}`}>
                            {loading ? (
                              <Skeleton width={120} />
                            ) : (
                              itemDetailQuery?.ownerName
                            )}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${itemDetailQuery?.creatorId}`}>
                            {loading ? (
                              <Skeleton circle height={50} width={50} />
                            ) : (
                              <img
                                className="lazy"
                                src={itemDetailQuery?.creatorImage}
                                alt=""
                              />
                            )}
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${itemDetailQuery?.creatorId}`}>
                            {itemDetailQuery?.creatorName}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      {loading ? (
                        <Skeleton width="20%" height={30} />
                      ) : (
                        <>
                          <img src={EthImage} alt="" />
                          <span>{itemDetailQuery?.likes}</span>
                        </>
                      )}
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

export default ItemDetails;
