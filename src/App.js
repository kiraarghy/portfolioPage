import React, { Component } from "react";
import "./App.css";
import CV from "./CV/CV.js";
import Portfolio from "./Portfolio/Portfolio.js";
import AboutMe from "./AboutMe/AboutMe.js";

class App extends Component {
  pageDisplay = () => {
    if ((this.selected = "cv")) {
      return <CV />;
    }
    if ((this.selected = "portfolio")) {
      return <Portfolio />;
    }
    if ((this.selected = "aboutme")) {
      return <AboutMe />;
    }
  };
  render() {
    return <pageDisplay />;
  }
}

export default App;
