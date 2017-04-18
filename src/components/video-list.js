import React, { Component } from 'react';
import VideoListItem from './video-list-item';

export default class videoList extends Component {
 
    render(){
        const {videos,onVideoSelect} = this.props;
        //const url = this.props.videos[0].snippet.thumbnails.high.url;
        return (
           <ul className='collection'>
               {videos.map((video)=>{
                    return(
                        <VideoListItem video={video} key={video.etag} onVideoSelect={onVideoSelect}/>
                    )
               })}
               
            </ul>
        )
    }
}