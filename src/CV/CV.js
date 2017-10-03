import React, { Component } from "react";
import "./App.css";
import JobsComponent from "./Jobs.js";

//is a content holder for Jobs

class CV extends Component {
  JobsHolder = () => {
    Jobs.forEach(element => {
      return <JobsComponent {Jobs[index]} />;
    });
  };

  render() {
    return <JobsHolder />;
  }
}
export default CV;
