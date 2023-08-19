import React, { useState } from "react";
import { useEffect } from "react";
import "./skin.css";
import { Link } from "react-router-dom";

export default function Skins({ weapondata,Setcurrskin }) {
  useEffect(() => {
    console.log(weapondata);
  }, []);
  const [gunselected,Setgunselected]=useState("-1")
  return (
    <div>
      <div className="container sortme">
           <label htmlFor="gunSelect" >Select a gun : </label>
      <select id="gunSelect" value={gunselected} onChange={(e)=>{
            Setgunselected(e.target.value);
           }}>
        <option value="-1">Select a gun</option>
        <option value="Vandal">Vandal</option>
        <option value="Phantom">Phantom</option>
        <option value="Odin">Odin</option>
        <option value="Ares">Ares</option>
        <option value="Bulldog">Bulldog</option>
        <option value="Judge">Judge</option>
        <option value="Bucky">Bucky</option>
        <option value="Frenzy">Frenzy</option>
        <option value="Classic">Classic</option>
        <option value="Ghost">Ghost</option>
        <option value="Sheriff">Sheriff</option>
        <option value="Shorty">Shorty</option>
        <option value="Operator">Operator</option>
        <option value="Guardian">Guardian</option>
        <option value="Marshal">Marshal</option>
        <option value="Spectre">Spectre</option>
        <option value="Stinger">Stinger</option>
        <option value="Melee">Melee</option>
    </select>
    </div>
    <div className="row skinparent ">
  {weapondata.map((data, index) => {
      if(gunselected!="-1" && gunselected!=data.displayName)return;
    return (
      <React.Fragment key={index}>
        {data.skins.map((skin, skinindex) => {
              console.log(gunselected)
            if(skin.displayIcon==null || skin.contentTierUuid==null)return;
          return (
            <div key={skinindex} className="col-lg-4 col-md-6 col-sm-12 skincontainer" >
              <div className="skins hovereffect">
                <img
                  className="skinimage"
                  src={skin.displayIcon}
                  alt=""
                />
                <div class="overlay" style={{ zIndex: "1" }}>
                <Link to={`/skin/${(data.displayName).toLowerCase()}/${skin.uuid}`}  className="info" onClick={()=>{
                    Setcurrskin(skin)
                }}>click me</Link>
                </div>
            <p className="skinnamecart">{skin.displayName}</p>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  })}
</div>

    </div>
  );
}
