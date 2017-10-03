import React, { Component } from "react";
import SkillsHolder from '../CommonComponents/SkillsHolder.js'

class Portfolio extends Component {
render () { 
  return (
    <div>
      <a src= {ProjectURL} alt = "Click me">{ProjectTitle}</div>
      <img src={ProjectPicture} alt= {ProjectPictureAlt}/>
      <div>{ProjectDescription}</div>
      <SkillsHolder {Skills}/>
    </div> 
  )
}
}

export default Portfolio;