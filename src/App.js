import logo from './images/logo.png';
import './App.css';
import React from "react";
import SocialFollow from "./SocialFollow";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Soon with your nearest Kirana Stores.
        </p>
        <SocialFollow/>
    </header>
    </div>
  );
}

export default App;
