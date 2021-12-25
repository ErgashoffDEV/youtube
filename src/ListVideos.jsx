import React from 'react';
import SiteVideos from "./SiteVideos";

const ListVideos = ({videos, onVideoSelected}) => {
    const videoLists = videos.map(video => (
        <SiteVideos
        onVideoSelect={onVideoSelected}
        key={video.id.videoId}
        video={video}
        />
    ))
    return (
        <div>
            {videoLists}
        </div>
    );
};

export default ListVideos;