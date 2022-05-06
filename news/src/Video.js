import React from 'react';
import './Video.css';

function Video(){
    return (
        <div className="video">
            <video 
              className="video__player"
              loop
              controls      
            >
            </video>
            {/* <VideoFooter /> */}
            {/* <VideoSidebar /> /> */}
        </div>
    );
}
export default Video