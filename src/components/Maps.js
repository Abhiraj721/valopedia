import React from "react";
import "./map.css";
import { Link } from "react-router-dom";
export default function Maps({ mapdata, Setcurrmap }) {
  return (
    <div>
      <div className="row mapsparent container-fluid">
        {mapdata.map((data, index) => {
          if (data.coordinates == null || data.displayName=="The Range") return;
          if (data.isPlayableCharacter == false) return;
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 mapcard ">
              <div className="hovereffect">
                <div className="mapbackimg">
                  <img
                    data-aos="fade-right"
                    className="mapimg"
                    src={data.splash}
                    alt=""
                  />
                </div>
                <div class="overlay">
                  <Link
                    className="info"
                    to={`/maps/${data.uuid}`}
                    onClick={() => {
                      Setcurrmap(index);
                    }}
                  >
                    map Info
                  </Link>
                </div>
                <div className="mapcartinfo">
                  <h5>{data.displayName}</h5>
                </div>
              </div>
            </div>
          );
        })}
        <br />
      </div>
    </div>
  );
}
