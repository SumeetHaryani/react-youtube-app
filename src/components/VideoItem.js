import React from 'react';
import { ListGroupItem } from 'reactstrap';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <ListGroupItem
      style={{ cursor: 'pointer' }}
      onClick={() => onVideoSelect(video)}
    >
      <img
        className="img-thumbnail border shadow-sm "
        src={video.snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      {video.snippet.title}
    </ListGroupItem>
  );
};
export default VideoItem;
