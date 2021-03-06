import React, { useRef, useState } from "react";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import './Video.css';


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
            <video
             className="video__player"
             loop
             onClick={onVideoPress}
            ref={videoRef}
             src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            ></video>
            <VideoFooter channel="rafehqazi" description="Check out this dance" song="Usher - Yeah"/>
            <VideoSidebar />
            {/* <VideoSidebar /> /> */}
        </div>
    );
};
export default Video;