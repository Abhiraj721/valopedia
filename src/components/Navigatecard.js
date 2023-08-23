import React from "react";
import Quotetyper from "./Quotetyper";
import "./navigatecard.css";
import Linkcard from "./Linkcard";
import skins from "./images/skins.png";
export default function Navigatecard() {
  
  return (
    <div>
      <Quotetyper></Quotetyper>
      <br />
      <h4 style={{fontFamily:"Ubuntu"}}>What do you want to Explore</h4>
      <div className="row container-fluid" style={{ margin: "0 auto" }}>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://staticg.sportskeeda.com/editor/2021/04/2fadf-16178192092568-800.jpg"
            }
            title={"Agents"}
            onhover={"Discover the distinct abilities of every Agent for strategic advantage."}
            pageurl={"/agents"}
          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard imgurl={skins} title={"Skins"}
           onhover={"Explore a variety of customizable skins with different chromas and visual effects."}
           pageurl={"/skins"}
           ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://firstsportz.com/wp-content/uploads/2022/12/valorant-guns.jpg"
            }
            title={"Weapons"}
            onhover={"Explore a variety of customizable skins with different chromas and visual effects."}
           pageurl={"/weapon"}

          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://whatifgaming.com/wp-content/uploads/2022/03/Valorant-Maps.jpg"
            }
            title={"Maps"}
            onhover={"Master maps with crucial callouts and explore their unique features to dominate matches."}
           pageurl={"/maps"}

          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://media.valorant-api.com/bundles/81d85522-4651-4f66-72de-5fa057b3514c/displayicon2.png"
            }
            title={"Gun Bundles"}
            onhover={"Equip your arsenal with thematic collections of weapons for a stylish edge."}
           pageurl={"/bundles"}

          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://media.valorant-api.com/sprays/3b1a23b5-4119-3c68-27ed-3e85510c954e/animation.gif"
            }
            title={"Sprays"}
            onhover={"Express yourself through sprays, leaving your mark on the battlefield."}
           pageurl={"/sprays"}

          ></Linkcard></div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          
                    <Linkcard
            imgurl={
              "data:image/jpeg;base64,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"
            }
            title={"Ranks"}
            onhover={"explore the all ranks in valorant."}
           pageurl={"/ranks"}

          ></Linkcard>
        </div>
        <footer className="footer">
      <div className="container">
        <p className="text-center">© 2023 Valopedia. All rights reserved.</p>
        <p className="text-center">Website designed and developed by <a href="https://abhirajbhosle.netlify.app/" style={{textDecoration:"none",color:"red"}}>Abhiraj</a></p>
      </div>
    </footer>
      </div>
    </div>
  );
}
