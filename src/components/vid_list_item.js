import React, {Component} from 'react';

const VidListItem = ({video, onVideoSelect}) =>{
    // const video = props.video is identical to ({video})

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    // Whenever user clicks on <li>, we call onVideoSelect and pass it that particular item
    return(
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
}

export default VidListItem;