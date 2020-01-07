import React from 'react';
import VideoItem from './VideoItem';
import { ListGroup } from 'reactstrap';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <ListGroup>{renderedList}</ListGroup>;
};

export default VideoList;
