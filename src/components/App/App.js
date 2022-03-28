//import React from "react";
import User from "../User/";
import Skills from "../Skills/";
import Profil from "../Profil/";

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="grid__container">
        <div className="sidebar">
          <User />
          <Skills />
        </div>
        <div className="main">main
          <Profil />
        </div> 
      </div>

    </div>
  );
};


export default App;
