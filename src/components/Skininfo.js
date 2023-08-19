import React, { useState } from "react";
import { useEffect } from "react";

export default function Skininfo({ currskin, Setcurrskin, weapondata }) {
  const [chromasofSkin, SetchromasofSkin] = useState("");
  useEffect(() => {
    const skininfo = extractkinInfo();
    const [currskinName, currentskin_uid] = [...skininfo];
    handleFindCurrskin(currskinName, currentskin_uid);
  }, []);
  const extractkinInfo = () => {
    const currurl = window.location.href;
    const tempindex = currurl.indexOf("skin");
    const currentskin_name_uid = currurl.substring(tempindex + 5);
    let currskinName = "null";
    weapondata.map((data, index) => {
      if (currentskin_name_uid.indexOf(data.displayName.toLowerCase()) == 0) {
        currskinName = data.displayName.toLowerCase();
      }
    });
    const currentskin_uid = currentskin_name_uid.substring(
      currskinName.length + 1
    );
    return [currskinName, currentskin_uid];
  };
  const handleFindCurrskin = (skinname, skinuid) => {
    weapondata.forEach((data, index) => {
      const currname = data.displayName.toLowerCase();
      if (currname === skinname) {
        data.skins.forEach((skindata, skinindex) => {
          if (skindata.uuid === skinuid) {
            Setcurrskin(skindata);
            SetchromasofSkin(skindata.displayIcon); //curr chromas
          }
        });
      }
    });
  };
  return (
    <div className="skininfopage">
 
      <h4 className="skininfohead">{currskin.displayName}</h4>
      <img className="skininfoimg" src={chromasofSkin} alt="" />
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h3>Chromas</h3>
          <div className="swatch-group">
            {currskin.chromas != null &&
              currskin.chromas.map((data, index) => {
                if (data.swatch == null) return;
                return (
                  <button
                    className="swatchbtn"
                    onClick={() => SetchromasofSkin(data.fullRender)}
                  >
                    <img className="swatchimg" src={data.swatch} alt="" />
                  </button>
                );
              })}
              {currskin.chromas!=null && currskin.chromas.length==1 ? <p>This skin has no chromas</p> : ""}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h3>VFX</h3>
         {currskin.chromas != null && currskin.levels[currskin.levels.length - 1].streamedVideo!=null ? <video className="streamvideo" controls>
            <source src={ currskin.levels[currskin.levels.length - 1].streamedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video> :  <p>    This skin has no VFX or limited features.</p>}
        </div>
      </div>
    </div>
  );
}
