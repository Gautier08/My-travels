import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Quote
          Quote="I believe the children are the future... Unless we stop them now!"
          country="Maroc"
          photo="https://images.salaun-holidays.com/(Image)-image-Maroc-Ouarzazate-Casbah-Amahidil-44-it_72255885-09032017.jpg"
          distance="2600 km"
        />
      </div>
    );
  }
}

export default App;