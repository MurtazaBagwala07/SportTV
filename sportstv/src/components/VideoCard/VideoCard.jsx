import React from 'react'
import { useNavigate } from 'react-router-dom'
import './VideoCard.css'

export const VideoCard = ({vid}) => {
    const navigate = useNavigate()

    const toSingleVideoPage=()=>{
        navigate(`/video/${vid._id}`)
    }
  return (
    <>
        <div className='video-card'>
            <div className='video-thumbnail' onClick={()=>toSingleVideoPage()}>
                <img className='img-resp' src={`https://i.ytimg.com/vi/${vid._id}/0.jpg`} alt="video-thumbnail" />
            </div>
            
            <div className='video-main'>
                <header className='video-heading'>
                    {vid.title}
                </header>
                <div className='video-card-actions'>
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            
            <p className='video-main'>
                <span className='video-creator video-detail'>{vid.creator}</span>
                <span className='video-date video-detail'>{vid.uploadDate}</span>
            </p>
        </div>
    </>
  )
}

