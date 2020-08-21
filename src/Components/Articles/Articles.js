import React, { Component } from "react";
import VideoTutorialsContainer from "../VideoTutorials/VideoTutorialsContainer";
import LinksData from "../LinksData";
export default class Articles extends Component {
  render() {
    const ArticlesComponent = LinksData.map((link) => (
      <VideoTutorialsContainer
        key={link.id}
        title={link.linkTitle}
        url={link.linkURL}
        name={link.linkName}
        language={link.linkLanguage}
        level={link.linkLevel}
        img={link.linkImg}
        alt={link.linkAlt}
      />
    ));
    return <section>{ArticlesComponent}</section>;
  }
}
