import React, { Component } from "react";
import VideoTutorialsContainer from "../VideoTutorials/VideoTutorialsContainer";
import LinksData from "../LinksData";
export default class VideoTutorials extends Component {
  render() {
    const VideoTutorialsComponent = LinksData.map((link) => (
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
    return (
      <section>
        <h2>Video Tutorial Section</h2>
        {VideoTutorialsComponent}
      </section>
    );
  }
}
