import React, { Component } from "react";
import VideoTutorialsContainer from "../VideoTutorials/VideoTutorialsContainer";
import LinksData from "../LinksData";
export default class InteractiveTuts extends Component {
  render() {
    const InteractiveTutorialsComponent = LinksData.map((link) => (
      <VideoTutorialsContainer
        key={link.id}
        title={link.interactiveTitle}
        url={link.interactiveURL}
        name={link.interactiveName}
        language={link.interactiveLanguage}
        level={link.interactiveLevel}
        img={link.interactiveImg}
        alt={link.interactiveAlt}
      />
    ));
    return <section>{InteractiveTutorialsComponent}</section>;
  }
}
