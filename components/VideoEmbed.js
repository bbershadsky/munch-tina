import React from "react";

const VideoEmbed = ({ src, title }) => (
  <div className="video-embed">
    <iframe
      width="560"
      height="315"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
export default VideoEmbed;
