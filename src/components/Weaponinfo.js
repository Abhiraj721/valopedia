import React from "react";
import { useEffect } from "react";
export default function Weaponinfo({
  weapondata,
  weaponClicked,
  SetweaponClicked,
}) {
  useEffect(() => {
    const currurl = window.location.href;
    const tempindex = currurl.indexOf("weaponinfo");
    const currentweapon_uid = currurl.substring(tempindex + 11);
    console.log(currentweapon_uid);
    const currweaponIndex = weapondata.findIndex(
      (weapondata) => weapondata.uuid === currentweapon_uid
    );
    if (weaponClicked == 0) SetweaponClicked(currweaponIndex);
  }, []);
  const data = weapondata[weaponClicked];
  return (
    <div>
      <div>
        <div>
          <h1 style={{ fontFamily: "valorant" }}>{data.displayName}</h1>
          <div className="weaponinfoimgcontainer">
            <img
              className="weaponinfoimg"
              src={weapondata[weaponClicked].displayIcon}
              alt=""
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 weaponstats">
            <div className="innerweaponstats">
              <h2 className="headinfo">Weapon Stats</h2>
              <h5>Category : {data.displayName != "Melee"  ? data.shopData.categoryText : "Melle"}</h5>

              {data.displayName != "Melee" && (
                <>
                  <h5>Cost : {data.shopData.cost}</h5>
                  <h5>MagazineSize : {data.weaponStats.magazineSize}</h5>
                  <h5>FireRate : {data.weaponStats.fireRate}</h5>
                  <h5>
                    FirstBulletAccuracy : {data.weaponStats.firstBulletAccuracy}
                  </h5>
                  <h5>
                    ReloadTimeSeconds : {data.weaponStats.reloadTimeSeconds}
                  </h5>
                  <h5>
                    RunSpeedMultiplier : {data.weaponStats.runSpeedMultiplier}
                  </h5>
                  <h5>
                    WallPenetration :{" "}
                    {data.weaponStats.wallPenetration.substring(29)}
                  </h5>
                </>
              )}
            </div>
          </div>
         {weapondata[weaponClicked].displayName!="Melee" && <div className="col-lg-6 col-md-6 col-sm-12  damagestats">
            <h2 className="headinfo">Damage Stats</h2>
            {data.weaponStats.damageRanges.map((weapon, index) => {
              return (
                <div className="innerdamagestats">
                  <h5>rangeStartMeters : {weapon.rangeStartMeters}</h5>
                  <h5>rangeEndMeters : {weapon.legDamage}</h5>
                  <h5>legDamage : {weapon.rangeStartMeters}</h5>
                  <h5>headDamage : {weapon.headDamage}</h5>
                  <h5>bodyDamage : {weapon.bodyDamage}</h5>
                  <hr />
                </div>
              );
            })}
          </div>}
        </div>
      </div>
    </div>
  );
}
