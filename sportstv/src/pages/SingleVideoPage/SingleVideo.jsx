import React from 'react'
import {Sidebar} from '../../components'
import {useParams} from 'react-router-dom'
import {useData} from '../../context'
import './SingleVideo.css'

export const SingleVideo = () => {

    const {videoID} = useParams();
    const {state,dispatch} = useData();
    const video = state.videos?.find((vid)=>vid._id === videoID);
    console.log(video)

  return (
    <div className='singlevideo-page'>
        <Sidebar/>
        <div className='video-play-container'>
        <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${videoID}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen=''
          ></iframe>
          <div className='video-footer'>
            <div className='video-headers'>
                <h2 className='video-title'>
                    {video.title}
                </h2>
                <h5 className='video-creator'>
                    {video.creator}
                </h5>
                <small className='video-date'>
                    {video.uploadDate}
                </small>
            </div>
            <div className='video-action-btns'>
                <button className='action-btn'>
                    <i class="fas fa-thumbs-up "></i> Like
                </button>
                <button className='action-btn'>
                    <i class="far fa-clock "></i> Watch Later
                </button>
                <button className='action-btn'>
                    <i class="fas fa-copy "></i> Copy Link
                </button>
            </div> 
          </div>
          <div className='video-description'>
                <h4>Description:</h4>
                <p>{video.description}</p>
          </div>
        </div>
    </div>
  )
}

