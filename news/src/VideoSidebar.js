import React from 'react'
import './VideoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
function VideoSidebar() {
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                <FavoriteIcon />
                <p>300</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon />
                <p>230</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon />
                <p>10</p>
            </div>
        </div>
    );
}
export default VideoSidebar;