import React from "react";
import { useEffect } from "react";
import mapdetails from "./Mapdetails";
export default function Mapinfo({ mapdata, currmap, Setcurrmap }) {
  useEffect(() => {
    const currurl = window.location.href;
    const tempindex = currurl.indexOf("maps");
    const currentmap_uid = currurl.substring(tempindex + 5);
    console.log(currentmap_uid);
    const currmapIndex = mapdata.findIndex(
      (mapdata) => mapdata.uuid === currentmap_uid
    );
    console.log(currmap);
    if (currmap == 0) Setcurrmap(currmapIndex);
  }, []);
  const map = mapdata[currmap];
  const maparr = mapdetails[map.displayName];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1 className="mapinfohead">{map.displayName}</h1>
          <img className="mapinfoswatch" src={map.splash} alt="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <br />
          <h3 className="mapinfohead">Map Details</h3>
          <div className="mapdetails">
            <table className="mapdetailtable">
              <tr>
                <td>Map Name</td>
                <td>{map.displayName}</td>
              </tr>
              <tr>
                <td>Coortinates</td>
                <td>{map.coordinates}</td>
              </tr>
              <tr>
                <td>Spike Sites</td>
                <td>{maparr.sites}</td>
              </tr>
            </table>
            <br />
            <div className="feature">
              <h4 className="mapinfohead">Features</h4>
              <p className="container">
                "<i>{maparr.feature}</i>"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="minimap">
            <h4 className="mapinfohead">Mini Map</h4>
            <img className="minimapimg" src={map.displayIcon} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 callout">
            <h3 className="mapinfohead">Callouts</h3>
          <table className="callouttable">
           <tr className="headtr">
           <td>Region Name</td>
              <td>Super Region Name</td>
              <td>Location</td>
           </tr>
          
            {map.callouts.map((call, index) => {
              return (
                <>
                  <tr>
                    <td>{call.regionName}</td>
                    <td>{call.superRegionName}</td>
                    <td>{`x: ${call.location.x},y: ${call.location.y}`}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
