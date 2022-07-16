import React from 'react'
import { VideoCard ,Sidebar } from '../../components';
import {useData} from '../../context'
import './WatchLater.css'

export const WatchLater = () => {
    const {state} = useData();
  return (
    <div className='watchlater-wrapper'>
        <Sidebar/>
        <div className='watchlater-section'>{state.watchLater.map((vid)=>(
            <VideoCard vid={vid}/>
        ))}</div>
    </div>
  )
}

