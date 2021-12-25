import React from 'react';

const SiteVideos = ({video, onVideoSelect}) => {
    return (
        <>
            <div className="videoItems" onClick={() => onVideoSelect(video)}>
                <img className="m" src={video.snippet.thumbnails.medium.url} alt="" style={{marginRight: "20px"}}/>
                <div>
                    <h3 className="titleVideos">{video.snippet.title}</h3>
                </div>
            </div>
        </>
    );
};

export default SiteVideos;