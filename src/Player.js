import React from "react";
import ReactPlayer from 'react-player'

var data = window.location.href;
var height = window.screen.height;
var width = window.screen.width*1;

const ReactVideoPlayer = () =>{
    return(
        <div  className="player-wrapper">
            <ReactPlayer
                className='react-player' 
                url={data.split("?.")[1]} 
                controls={true} 
                width={width}
                height={height}
                />
        </div>
    );
    
};

export default ReactVideoPlayer;