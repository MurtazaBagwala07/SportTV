import React from 'react'
import {useData} from '../../context'
import { useParams } from 'react-router-dom'
import {Sidebar,PlaylistVideo} from '../../components'
import './SinglePlaylist.css'

export const SinglePlaylist = () => {

  const {playlistId} = useParams();
  const {state} = useData();
  const playlist = state.playlists.find((list)=>list._id===playlistId)

  return (
    <div className='single-pl-wrapper'>
      <Sidebar/>
      {playlist.videos?.length==0 &&<div className='single-pl-section' style={{fontSize:'2rem'}}>No videos in this playlist currently</div>}
      <div className='single-pl-section'>
        {playlist.videos?.map((vid)=>(
          <PlaylistVideo key={vid._id} vid={vid} inPlaylist={playlist}/>
        ))}
      </div>
    </div>
  )
}

