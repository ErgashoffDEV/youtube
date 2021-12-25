import React, {useState} from 'react';
import Search from "./Search";
import fetchData from "./api/fetchData";
import Video from "./Video";
import ListVideos from "./ListVideos";

const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideos, setSelectedVideos] = useState({id: {}, snippet: {}})

    async function videoSubmit(searchTerm) {
        const {data: {items: videos}} = await fetchData.get("search", {
            params: {
                part: "snippet",
                maxResults: 3,
                key: "AIzaSyAXqT5-x0Qv3BNE1l9wkJZOlG8ww8qem1s",
                q: searchTerm
            }
        })
        console.log(videos)
        setVideos(videos)
        setSelectedVideos(videos[0])
    }

    return (
        <>
            <div className="searchSec">
                <Search onSubmit={videoSubmit}/>
            </div>

            <div className="videoMain">
                <div className="videoSection">
                    <Video video={selectedVideos}/>
                </div>

                <div className="videoLists">
                    <ListVideos videos={videos} onVideoSelected={selectedVideos}/>
                </div>
            </div>
        </>
    );
};

export default App;