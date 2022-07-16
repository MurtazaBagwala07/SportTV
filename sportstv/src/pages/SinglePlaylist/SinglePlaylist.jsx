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
      <div className='single-pl-section'>
        {playlist.videos?.map((vid)=>(
          <PlaylistVideo key={vid._id} vid={vid} inPlaylist={playlist}/>
        ))}
      </div>
    </div>
  )
}

