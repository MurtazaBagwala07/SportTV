import React from 'react'
import {useData} from '../../context'
import { useParams } from 'react-router-dom'
import {Sidebar,PlaylistVideo} from '../../components'

export const SinglePlaylist = () => {

  const {playlistId} = useParams();
  const {state} = useData();
  const playlist = state.playlists.find((list)=>list._id===playlistId)

  return (
    <div>
      <Sidebar/>
      <div>
        {playlist.videos?.map((vid)=>(
          <PlaylistVideo key={vid._id} vid={vid} inPlaylist={playlist}/>
        ))}
      </div>
    </div>
  )
}

