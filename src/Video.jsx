import React from 'react';

const Video = ({video: {id: {videoId}, snippet:{title, channelTitle, description}}}) => {
    if (!videoId) return <p className="noResult">No results</p>
    const videoSrc = `https://www.youtube.com/embed/${videoId}`

    return (
        <>
          <div className="videoIframe">
              <iframe src={videoSrc} frameborder="0" allowFullScreen title="Video Player"/>
          </div>
            <div className="videoInfo">
                <h1 className="titleVideo">{title}</h1>
                <h3 className="channelTitle">{channelTitle}</h3>
                <p className="description">{description}</p>
            </div>
        </>
    );
};

export default Video;