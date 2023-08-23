import React, { useEffect, useState } from "react";
import "./element.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
export default function Element({ datatype, elementsdata }) {
  const showClickedimg = (url, name, gifstate) => {
    Swal.fire({
      title: name,
      html: `<p>Want to download the ${
        gifstate == true ? "Gif" : "Image"
      } ? Right-click (or hold down on mobile) to 'Save Image" </p><img src=${url} style="max-width: 100%;">`,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      customClass: {
        content: "custom-image-modal",
      },
    });
  };
  const [searchval, Setsearchval] = useState("");
  const [spraystype, Setspraystype] = useState("gif sprays");
  return (
    <div>
      {datatype == "sprays" && (
        <div className="sortme">
          <label htmlFor="staticOrgif" style={{ fontSize: "16px" }}>
            Sprays type
          </label>
          <select
            className="staticOrgif"
            value={spraystype}
            onChange={(e) => {
              Setspraystype(e.target.value);
            }}
          >
            <option value="gif sprays">Gif Sprays</option>
            <option value="static sprays">Static Sprays</option>
          </select>
        </div>
      )}
      <div className="sortme">
        <label htmlFor="">Search</label>
        <input
          type="text"
          value={searchval}
          onChange={(e) => {
            Setsearchval(e.target.value);
          }}
        />
      </div>
      <div className="row elementparent container-fluid">
        {elementsdata.map((element, index) => {
          {console.log(element)}
          if (datatype == "sprays" && element.fullIcon == null) return;
          if (datatype == "ranks" && element.largeIcon == null) return;
          if (
            datatype == "sprays" &&
            spraystype == "gif sprays" &&
            element.animationGif == null
          )
            return;
          if (
            datatype == "sprays" &&
            spraystype == "static sprays" &&
            element.animationGif != null
          )
            return;
            if 
              (searchval !== "" && (datatype !== "ranks"
              ? element.displayName.toLowerCase().indexOf(searchval.toLowerCase()) === -1
              : element.tierName.toLowerCase().indexOf(searchval.toLowerCase()) === -1
            ))
            return;
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 elementcard">
              <div className="hovereffect">
                <div className="elementbackimg" style={datatype==="ranks" ? {backgroundColor:`#${element.backgroundColor}`} :{ backgroundColor:"transparent"}}>
                  <img
                    className="elementimg"
                    style={
                      datatype == "buddies"
                        ? { height: "78px" }
                        : datatype == "bundles"
                        ? { height: "230px", width: "100%" }
                        : { height: "150px", width: "40%" }
                    }
                    src={
                      datatype == "sprays" && element.animationGif != null
                        ? element.animationGif
                        : datatype == "sprays"
                        ? element.fullIcon
                        : datatype == "ranks"
                        ? element.largeIcon
                        : element.displayIcon
                    }
                    alt=""
                  />
                </div>
                <div class="overlay">
                  <button
                    className="info"
                    onClick={() =>
                      showClickedimg(
                        datatype == "sprays" && element.animationGif != null
                          ? element.animationGif
                          : datatype == "sprays"
                          ? element.fullIcon
                          : datatype == "cards"
                          ? element.largeArt
                          : element.displayIcon,
                        element.displayName,
                        datatype == "sprays" && element.animationGif != null
                      )
                    }
                  >
                    view
                  </button>
                </div>
                <div className="elementcartinfo">
                  <h5>
                    {datatype == "ranks"
                      ? element.tierName
                      : element.displayName}{" "}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
