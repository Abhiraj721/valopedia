import React from "react";
import "./agentinfo.css";
import { useEffect, useState } from "react";
import back from "./back.gif";
export default function Agentinfo({
  agentdata,
  curragentIndex,
  setcurragentIndex,
}) {
  const [currentHref, setCurrentHref] = useState("");
  const [abilityindex, Setabilityindex] = useState(0);
  useEffect(() => {
    const currurl = window.location.href;
    const tempindex = currurl.indexOf("agentinfo");
    const currentagent_uid = currurl.substring(tempindex + 10);
    const curragent_index = agentdata.findIndex(
      (agentdata) => agentdata.uuid === currentagent_uid
    );
    if (curragentIndex == 0) setcurragentIndex(curragent_index);
    setCurrentHref(currentagent_uid);
  }, []);
  const data = agentdata[curragentIndex];

  return (
    <div className="container-fluid">
      <div className="row agentinfoparent">
        <div
          className="col-lg-6 col-md-12 col-sm-12 "
          style={{
            background: `linear-gradient(to bottom, #${data.backgroundGradientColors[0]}, #${data.backgroundGradientColors[1]}, #${data.backgroundGradientColors[2]}, #${data.backgroundGradientColors[3]})`,
          }}
        >
          <img
            style={{ backgroundImage: `url(${data.background})` }}
            className="agentinfoimg"
            src={data.fullPortraitV2}
            alt=""
          />
        </div>

        <div
          className="col-lg-6 col-md-12 col-sm-12 agentinfo"
          style={{ backgroundImage: `url(${back})` }}
        >
          <br />
          <center>
            <h1 className="agenthead">
              {data.displayName}{" "}
              <span>
                <img className="iconagent" src={data.displayIcon} alt="" />
              </span>
            </h1>
            <br />
            <div className="groupdisplay">
              <h5>//Role</h5>
              <h3 style={{ fontFamily: "valorant" }}>
                {data.role.displayName}
              </h3>
            </div>
            <div className="groupdisplay">
              <h5>//Biography</h5>
              <h5 className="container">{data.description}</h5>
            </div>
          </center>
        </div>
      </div>
      <div className="row abilitysec">
        <h1 className="agenthead">Abilities</h1>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="ablilitiestoggle container">
            {data.abilities.map((abilility, index) => {
              if (abilility.displayIcon == null) return;
              return (
                <button className="abilitybtn">
                  <img
                    className="abilitybtnimg"
                    onClick={() => Setabilityindex(index)}
                    src={abilility.displayIcon}
                    alt=""
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 abilitydetails">
          <center>
            <div className="contentability">
              <h5 style={{ fontFamily: "valorant" }}>
                {data.abilities[abilityindex].displayName}
              </h5>
              <p className="container">
                {data.abilities[abilityindex].description}
              </p>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
