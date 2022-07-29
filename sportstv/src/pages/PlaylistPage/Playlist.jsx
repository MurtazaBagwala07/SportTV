import React from 'react'
import './Playlist.css'
import {useData} from '../../context'
import {Sidebar,PlaylistCard} from '../../components'

export const Playlist = () => {
  const {state} = useData();
  return (
    <div className='playlists-page-wrapper'>
      <Sidebar/>
      {state.playlists?.length ===0 && <div className='playlists-wrapper' style={{fontSize:'2rem'}}>No playlists created</div>}
      <div className='playlists-wrapper'>
        {state.playlists.map((list)=>(
          <PlaylistCard key={list._id} list={list}/>
        ))
        }
      </div>
    </div>
  )
}

