import React, { Component } from "react";
import ProjectComponent from './ProjectComponent.js'

class Portfolio extends Component {

  PortfolioHolder = () => {
    Project.forEach(element => {
      return <ProjectComponent {Project[index]} />;
    });
  }

  render() {
    return (
      <PortfolioHolder/>
    )
  }