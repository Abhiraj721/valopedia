import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom"; // Import the Link component


export default function Agents({
  agentsdata,
  curragentIndex,
  setcurragentIndex,
}) 

{
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'auto', // This creates a smooth scrolling effect
    });
  }
  return (
    <div>
      <div className="row agentsparent container-fluid">
        {agentsdata.map((data, index) => {
          if (data.isPlayableCharacter == false) return;
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-12 agentcard "
              style={{ background: `linear-gradient(to bottom, #${data.backgroundGradientColors[0]}, #${data.backgroundGradientColors[1]}, #${data.backgroundGradientColors[2]}, #${data.backgroundGradientColors[3]})`}}
            >
              <div className="hovereffect">
                <div  className="agentbackimg" style={{backgroundImage:"url(" + data.background + ")"}}>
                <img data-aos="fade-right"   className="agentimg" src={data.fullPortraitV2} alt="" />
                </div>
                <div class="overlay">
                  <Link
                    className="info"
                    to={`/agentinfo/${data.uuid}`}
                    onClick={() => {
                      setcurragentIndex(index);
                      scrollToTop();
                    }}
                  >
                    Agent Info
                  </Link>
                </div>
                <div className="agentcartinfo">
                  <h5>{data.displayName}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
