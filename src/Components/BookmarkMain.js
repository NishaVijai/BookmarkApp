import React, { Component } from "react";
import VideoTutorials from "./VideoTutorials/VideoTutorials";
import Articles from "./Articles/Articles";

export default class BookmarkMain extends Component {
  render() {
    return (
      <main>
        <h1>Bookmark Your Favourite Sites</h1>
        <VideoTutorials />
        <Articles />
      </main>
    );
  }
}
