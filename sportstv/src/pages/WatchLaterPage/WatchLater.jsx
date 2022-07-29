import React from 'react'
import { VideoCard ,Sidebar } from '../../components';
import {useData} from '../../context'
import './WatchLater.css'

export const WatchLater = () => {
    const {state} = useData();
  return (
    <div className='watchlater-wrapper'>
        <Sidebar/>
        {state?.watchLater?.length==0 && <div className='watchlater-section' style={{fontSize:'2rem'}}>No Videos in WatchLater</div>}
        <div className='watchlater-section'>{state?.watchLater?.map((vid)=>(
            <VideoCard vid={vid}/>
        ))}</div>
    </div>
  )
}

