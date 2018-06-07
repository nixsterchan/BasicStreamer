import React, {Component} from 'react';
import VidListItem from './vid_list_item';


const VidList = (props) => {
    const vidItems = props.videos.map((video) => {
        return (
            <VidListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
            ); 
    });

    return(
        <ul className="col-md-4 list-group">
            {vidItems}
        </ul>
    );
};

export default VidList;