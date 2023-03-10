import React, { useEffect } from "react";
import SubHeader from "../images/subheader.jpg";
import ExploreItems from "../components/explore/ExploreItems";
import { useGetExploreQuery } from "../redux/features/apiSlice";
import { SkeletonTwo } from "../components/UI/SkeletonTwo";

const Explore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = useGetExploreQuery();

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top` }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Explore</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              {isLoading ? (
                new Array(8).fill(0).map((_, index) => (
                  <div className="d-flex col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <SkeletonTwo key={index} loading={isLoading} />
                  </div>
                ))
              ) : (
                <ExploreItems data={data} />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
