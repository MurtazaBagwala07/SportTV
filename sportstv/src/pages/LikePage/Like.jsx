import React from 'react'
import './Like.css'
import { useData } from '../../context'
import { Sidebar,VideoCard } from '../../components';

export const Like = () => {
    const {state} = useData();
  return (
    <div className='likepage-wrapper'>
      <Sidebar/>
      {state.like?.length===0 &&  <div className='likepage-section'>No liked videos</div>}
        <div className='likepage-section'>{state.like?.map((vid)=>(
          <VideoCard key={vid._id} vid={vid} />
        ))}</div>
    </div>
    
  )
}

