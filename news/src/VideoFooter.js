import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";

function VideoFooter() {
    return(
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@channel</h3>
                <p>this is a description</p>
                <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon" />
                <Ticker mode="smooth">
                    {({ index }) => (
                        <>
                            <h1>Yooo whatsapp guys</h1>
                        </>
                    )}
                </Ticker>
            </div>
            </div>
            <img className="videoFooter__record"
             src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    );
}

export default VideoFooter;

