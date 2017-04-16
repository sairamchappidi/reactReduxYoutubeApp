import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    let imageURL = video.snippet.thumbnails.default.url
    return(<li onClick={()=>{onVideoSelect(video)}}>
                <div>
                    <img className='video-player' src={imageURL} />
                    <div className='video-title'>{video.snippet.title}</div>
                </div>
            </li>
    )
};
export default VideoListItem;