import React from 'react'
import {Header, Sidebar,VideoCard} from '../../components'
import {useData} from '../../context'
import './VideoListingPage.css'

export const VideoListingPage = () => {

  const {state,dispatch} = useData()
  
  return (
    <>
    
    <div className='videolisting-page-wrapper'>
        <Sidebar/>
        <div className='videolisting-section'>
            <div className="videolisting-page-chips">
              <div className="video-type-chip active-chip">
                  All
                </div>
                <div className="video-type-chip">
                  Football
                </div>
                <div className="video-type-chip">
                  Cricket
                </div>
                <div className="video-type-chip">
                  Chess
                </div>
                <div className="video-type-chip">
                  Tennis
                </div>
            </div>
            <div className="videolisting-videos">
              {state.videos.map((vid)=>(
                <VideoCard vid={vid} key={vid._id}/>
              ))}
            </div>
            
        </div>   
    </div>
    </>
  )
}

