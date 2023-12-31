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
      <h4 style={{ fontFamily: "Ubuntu" }}>What do you want to Explore</h4>
      <div className="row container-fluid" style={{ margin: "0 auto" }}>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://staticg.sportskeeda.com/editor/2021/04/2fadf-16178192092568-800.jpg"
            }
            title={"Agents"}
            onhover={
              "Discover the distinct abilities of every Agent for strategic advantage."
            }
            pageurl={"/agents"}
          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={skins}
            title={"Skins"}
            onhover={
              "Explore a variety of customizable skins with different chromas and visual effects."
            }
            pageurl={"/skins"}
          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://firstsportz.com/wp-content/uploads/2022/12/valorant-guns.jpg"
            }
            title={"Weapons"}
            onhover={
              "Explore a variety of customizable skins with different chromas and visual effects."
            }
            pageurl={"/weapon"}
          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://whatifgaming.com/wp-content/uploads/2022/03/Valorant-Maps.jpg"
            }
            title={"Maps"}
            onhover={
              "Master maps with crucial callouts and explore their unique features to dominate matches."
            }
            pageurl={"/maps"}
          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://media.valorant-api.com/bundles/81d85522-4651-4f66-72de-5fa057b3514c/displayicon2.png"
            }
            title={"Gun Bundles"}
            onhover={
              "Equip your arsenal with thematic collections of weapons for a stylish edge."
            }
            pageurl={"/bundles"}
          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://media.valorant-api.com/sprays/3b1a23b5-4119-3c68-27ed-3e85510c954e/animation.gif"
            }
            title={"Sprays"}
            onhover={
              "Express yourself through sprays, leaving your mark on the battlefield."
            }
            pageurl={"/sprays"}
          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://firstsportz.com/wp-content/uploads/2022/06/New-Project-75-1-1024x576.jpg"
            }
            title={"Buddies"}
            onhover={"explore the all gun buddies in valorant."}
            pageurl={"/buddies"}
          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5a6438f76e89acf/5eec2c0f34f8f30c7cfb3025/VALORANT_ICONS_2.jpg"
            }
            title={"Ranks"}
            onhover={"explore the all ranks in valorant."}
            pageurl={"/ranks"}
          ></Linkcard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Linkcard
            imgurl={
              "https://gumlet.assettype.com/afkgaming%2F2023-05%2F5284bdfd-d8b9-4977-9b78-21e96ff9cef5%2FUntitled_design__36_.jpg?compress=true&dpr=1&w=1200"
            }
            title={"Player Card"}
            onhover={"explore the all player card in valorant."}
            pageurl={"/playercard"}
          ></Linkcard>
        </div>
        <footer className="footer">
          <div className="container">
            <p className="text-center">
              © 2023 Valopedia. All rights reserved.
            </p>
            <p className="text-center">
              Website designed and developed by{" "}
              <a
                href="https://abhirajbhosle.netlify.app/"
                style={{ textDecoration: "none", color: "red" }}
              >
                Abhiraj
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
