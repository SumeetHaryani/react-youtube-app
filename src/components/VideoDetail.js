import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="video player"
          className="embed-responsive-item"
          src={videoSrc}
        />
      </div>
      <div className="border p-3">
        <h4> {video.snippet.title}</h4>
        <hr />
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
