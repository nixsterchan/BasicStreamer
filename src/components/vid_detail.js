import React, {Component} from 'react';



const VidDetail = ({video}) => {
    // Adding a check
    if (!video) {
        return <div>Loading... Please wait</div>;
    }

    // crafting our own embed url
    // MUST REMEMBER
    const videoId = video.id.videoId;
    const url= `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="vid-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="ember-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VidDetail;