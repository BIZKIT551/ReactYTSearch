import React from "react";
import { ProgressPlugin } from "webpack";

const VideoList = () => {
  return <ul className="col-md-4 list-group">{props.videos.length}</ul>;
};

export default VideoList;
