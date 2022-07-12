import React from 'react'
import { VideoCard } from '../../components';
import {useData} from '../../context'

export const WatchLater = () => {
    const {state} = useData();
  return (
    <div>{state.watchLater.map((vid)=>(
        <VideoCard vid={vid}/>
    ))}</div>
  )
}

