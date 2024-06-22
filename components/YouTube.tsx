import React from "react";

interface YouTubeProps {
  id: string;
}

const YouTube: React.FC<YouTubeProps> = ({ id }) => {
  return (
    <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default YouTube;
