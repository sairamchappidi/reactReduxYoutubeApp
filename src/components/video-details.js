import React from 'react';

const  VideoDetails = ({video}) => {

  
    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
      return(
        <section className='col-md-6 video-container' >
        <iframe className='video-player' src={videoURL} ></iframe>
        <div className='video-title'>{video.snippet.title}</div>
        <div className='video-description'>{video.snippet.description}</div>
        </section>
      )
}

export default VideoDetails;
