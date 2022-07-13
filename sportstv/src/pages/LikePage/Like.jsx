import React from 'react'
import './Like.css'
import { useData } from '../../context'
import { VideoCard } from '../../components';

export const Like = () => {
    const {state} = useData();
  return (
    <div>{state.like.map((vid)=>(
        <VideoCard vid={vid} />
    ))}</div>
  )
}

