import React, { Component } from "react";
import "./App.css";

//Provides a content holder for each job

class JobsComponent extends Component {
  //SkillsHolder displays skills learnt on job note split this into CommonComponents
  SkillsHolder = () => {
    Skills.forEach(element => {
      return <div> {Skills[index]} </div>;
    });
  };

  render() {
    return;
    <div>
      <div> {JobTitle} </div>
      <div> {JobPeriod} </div>
      <SkillsHolder />
      <div> {JobDescription}; </div>
    </div>;
  }
}
export default JobsComponent;
