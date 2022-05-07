import React, { useRef, useState } from "react";
import VideoFooter from './VideoFooter';
import './Video.css';
import VideoPlayer from "react-video-js-player";
import ayush from "./images/ayush.mp4";

function Video(){
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
        videoRef.current.play();
        setPlaying(true);
        }
    };
    return (
        <div className="video">
            <h1>Videos</h1>
            <VideoPlayer
               src="D:\news\news\src\images\ayush.mp4"
              
               />
            {/* <VideoFooter /> */}
            {/* <VideoSidebar /> /> */}
        </div>
    );
};
export default Video;