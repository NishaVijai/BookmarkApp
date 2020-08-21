import React, { Component } from "react";
import VideoTutorialsContainer from "../VideoTutorials/VideoTutorialsContainer";
import LinksData from "../LinksData";
export default class Articles extends Component {
  render() {
    const ArticlesComponent = LinksData.map((link) => (
      <VideoTutorialsContainer
        key={link.id}
        title={link.articleTitle}
        url={link.articleURL}
        name={link.articleName}
        language={link.articleLanguage}
        level={link.articleLevel}
        img={link.articleImg}
        alt={link.articleAlt}
      />
    ));
    return (
      <section>
        <h2>Article Section</h2>
        {ArticlesComponent}
      </section>
    );
  }
}
