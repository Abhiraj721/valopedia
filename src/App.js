import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link ,Router} from "react-router-dom";
import Agents from "./components/Agents";
import Agentinfo from "./components/Agentinfo";
import Weapon from "./components/Weapon";
import Weaponinfo from "./components/Weaponinfo";
function App() {
  const [agentsdata, Setagentsdata] = useState([]);
  const [curragentIndex, setcurragentIndex] = useState(0);
  const [weapondata,Setweapondata]=useState([]);
  const [weaponClicked,SetweaponClicked]=useState(0);
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
          console.log(response.data);
         Setweapondata(response.data);
    
      }).catch((error)=>{
          console.log(error);
      })
  }
  useEffect(() => {
    getagentdata();
    getweapondata();
  }, []);

  return (
    <div className="App">
      
      <Link to="/agents">click me</Link>
      <br />
      <Link to="/weapon">click meee</Link>

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
      </Routes>
     
    </div>
  );
}

export default App;
