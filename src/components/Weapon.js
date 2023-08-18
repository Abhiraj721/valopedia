import React from "react";
import { useEffect, useState } from "react";
import "./weapon.css";
import { Link } from "react-router-dom";
export default function Weapon({
  weapondata,
  getweapondata,
  SetweaponClicked,
}) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "auto", // This creates a smooth scrolling effect
    });
  }
  const [sortby, Setsortby] = useState("showall");
  return (
    <div>
      <div className="container sortme">
      <label  htmlFor="sortby">Sort By :</label>
      <select name="" value={sortby} onChange={(e)=>{
        Setsortby(e.target.value);
      }} className="sortby" id="">
        <option value={"showall"}>Show all</option>
        <option value={"rifle"}>Rifle</option>
        <option value={"sidearm"}>Sidearm</option>
        <option value={"sniper"}>Sniper</option>
        <option value={"smg"}>SMG</option>
        <option value={"shotgun"}>Shotgun</option>
      </select>
      </div>
      <div className="row">
    
        {weapondata.map((weapon, index) => {
          
         if(sortby!="showall" && (weapon.category).substring(21).toLowerCase()!=sortby)return;
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 secweapon">
              <div className="weaponcard hovereffect">
                <div class="overlay" style={{ zIndex: "1" }}>
                  <Link
                    className="info"
                    to={`/weaponinfo/${weapon.uuid}`}
                    onClick={() => {
                      SetweaponClicked(index);
                      scrollToTop();
                    }}
                  >
                    Weapon info
                  </Link>
                </div>
                <div className="weaponimgcontainer">
                  <img className="weaponimg" src={weapon.displayIcon} alt="" />
                </div>
                <h4 className="weaponname">{weapon.displayName}</h4>
                <p>
                  {" "}
                  {weapon.category.substring(1, 20) +
                    weapon.category.substring(21)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
