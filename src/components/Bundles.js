import React from "react";
import "./bundle.css"
export default function Bundles({ datatype,bundlesdata }) {
  return (
    <div>
      <div className="row bundleparent container-fluid">
        {bundlesdata.map((bundle, index) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 bundlecard">
                <div className="hovereffect">
                  <div className="bundlebackimg">
                    <img
                      data-aos="fade-right"
                      className="bundleimg"
                      style={datatype=="buddies" ? {height:"78px"}:{}}
                      src={bundle.displayIcon}
                      alt=""
                    />
                  </div>
                  <div class="overlay"></div>
                  <div className="bundlecartinfo">
                    <h5>{bundle.displayName}</h5>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
