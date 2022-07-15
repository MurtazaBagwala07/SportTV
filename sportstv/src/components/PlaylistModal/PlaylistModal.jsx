import React,{useState} from 'react'
import {useData,useAuth} from '../../context'

export const PlaylistModal = () => {
    const {dispatch,state} = useData();
    const {token} = useAuth();
    
  return (
    <div>PlaylistModal</div>
  )
}
