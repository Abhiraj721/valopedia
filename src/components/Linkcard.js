import React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "./Scrolltotop";
export default function Linkcard({imgurl,title,onhover,pageurl}) {

  return (
    <div className="container linkcardparent">
      <div className="linkcard">
        <div className="hovereffect">
          <div class="overlay " style={{ zIndex: "1" }}>
            <p className="onhover container">{onhover}</p>
            <Link className="info" to={pageurl} onClick={scrollToTop}>Explore</Link>
          </div>
          <img
            className="cardimg"
            src={imgurl}
            alt=""
          />
        </div>
        <h3 className="titlecard">{title}</h3>
      </div>
    </div>
  );
}
