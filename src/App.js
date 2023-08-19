import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link ,Router} from "react-router-dom";
import Agents from "./components/Agents";
import Agentinfo from "./components/Agentinfo";
import Weapon from "./components/Weapon";
import Weaponinfo from "./components/Weaponinfo";
import Skins from "./components/Skins";
import Skininfo from "./components/Skininfo";
import Maps from "./components/Maps";
import Mapinfo from "./components/Mapinfo";
import Bundles from "./components/Bundles";
function App() {
  const [agentsdata, Setagentsdata] = useState([]);
  const [curragentIndex, setcurragentIndex] = useState(0);
  const [weapondata,Setweapondata]=useState([]);
  const [weaponClicked,SetweaponClicked]=useState(0);
  const [skinsdata,Setskinsdata]=useState([]);
  const [currskin,Setcurrskin]=useState([])
  const [mapdata,Setmapdata]=useState([]);
  const [currmap,Setcurrmap]=useState(0);
  const [bundlesdata,Setbundlesdata]=useState([]);
const [buddiesdata,Setbuddiesdata]=useState([]);
  function getagentdata()
  {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((response) => {
        Setagentsdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getweapondata()
  {
      fetch('https://valorant-api.com/v1/weapons').then((response)=>{
          return response.json();
      }).then((response)=>{
         Setweapondata(response.data);
    
      }).catch((error)=>{
          console.log(error);
      })
  }
  function getmapdata()
  {
    fetch('https://valorant-api.com/v1/maps').then((response)=>{
      return response.json();
    }).then((response)=>{
        Setmapdata(response.data);
        console.log(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  function getbundlesdata()
  {
    fetch('https://valorant-api.com/v1/bundles').then((response)=>{
      return response.json();
    }).then((response)=>{
        Setbundlesdata(response.data);
        console.log(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  function getbuddiesdata()
  {
    fetch('https://valorant-api.com/v1/buddies').then((response)=>{
      return response.json();
    }).then((response)=>{
        Setbuddiesdata(response.data);
        console.log(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  useEffect(() => {
    getagentdata();
    getweapondata();
    getmapdata();
    getbundlesdata();
    getbuddiesdata();
  }, []);

  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Link to="/agents">click me</Link>
      <br />
      <Link to="/weapon">click meee</Link>
      <br />
      <Link to="/skins">Click mee</Link>
      <br />

      <Link to="/maps">Click meeeee</Link>
      <Link to="/bundles">Click mee</Link>
<Link to="/buddies">click mee</Link>
      </div>
      <br /><br />
      <Routes>
  
        <Route
         path="/agents"
          element={
            <Agents
              agentsdata={agentsdata}
              curragentIndex={curragentIndex}
              setcurragentIndex={setcurragentIndex} // Pass the setter function
            />
          }
        />
        {agentsdata.map((ele, index) => {
          return (
            <Route
              path={`/agentinfo/${ele.uuid}`}
              element={
                <Agentinfo
                  agentdata={agentsdata}
                  curragentIndex={curragentIndex}
                  setcurragentIndex={setcurragentIndex}
                />
              }
            ></Route>
          );
        })}
        <Route
          path="/weapon"
          element={<Weapon weapondata={weapondata}   getweapondata={getweapondata} SetweaponClicked={SetweaponClicked}></Weapon>}
        ></Route>
        
        {weapondata.map((weapon, index) => {
        return (
          <Route
            path={`/weaponinfo/${weapon.uuid}`}
            element={<Weaponinfo weapondata={weapondata} weaponClicked={weaponClicked} SetweaponClicked={SetweaponClicked}></Weaponinfo>}
          ></Route>
        );
      })}
      <Route path="/skins" element={<Skins weapondata={weapondata} Setcurrskin={Setcurrskin}></Skins>}>

      </Route>
      {
        weapondata.map((weapon,index)=>{
          return (weapon.skins).map((skin,index)=>{
          return  <Route path={`/skin/${(weapon.displayName).toLowerCase()}/${skin.uuid}`} element={<Skininfo currskin={currskin} Setcurrskin={Setcurrskin} weapondata={weapondata}></Skininfo>}></Route>
          })
        })
      }
       <Route path="/maps" element={<Maps mapdata={mapdata} Setcurrmap={Setcurrmap}></Maps>}></Route>
   {
    mapdata.map((data,index)=>{
      if(data.coordinates==null)return;
     return  <Route path={`/maps/${data.uuid}`} element={<Mapinfo mapdata={mapdata} currmap={currmap} Setcurrmap={Setcurrmap}></Mapinfo>}></Route>
    })
   }
   <Route path="/bundles" element={<Bundles datatype="bundles" bundlesdata={bundlesdata}></Bundles>}></Route>
   <Route path="/buddies" element={<Bundles datatype="buddies" bundlesdata={buddiesdata}></Bundles>}></Route>

      </Routes>
    </div>
  );
}

export default App;
