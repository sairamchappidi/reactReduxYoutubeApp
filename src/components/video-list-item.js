import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    let imageURL = video.snippet.thumbnails.default.url
    return(<li className = 'collection-item avatar' onClick={()=>{onVideoSelect(video)}}>
                <div>
                    <img className='circle' src={imageURL} />
                    <div className = 'title'>{video.snippet.title}</div>
                </div>
            </li>
    )
};
export default VideoListItem;