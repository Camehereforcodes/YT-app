import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const renderedVideo = props.videos.map((video) => {
        return (
                <VideoItem key={video.id.videoId} video={video} selectVideo = {props.videoSelect}/>
        )
    })
    return (
        <div className="ui relaxed divided list">
            {renderedVideo}
        </div>
    )
}

export default VideoList