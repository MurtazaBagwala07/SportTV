import React from 'react'
import {useData,useAuth} from '../../context'
import { deletePlaylistService } from '../../services/services'
import {ACTION_TYPE} from '../../utils'
import {useNavigate} from 'react-router-dom'
import './PlaylistCard.css'

export const PlaylistCard = ({list}) => {

    const {state,dispatch} = useData();
    const {auth} = useAuth();
    const navigate = useNavigate()

    const deletePlaylistHandler=async()=>{
        if(auth.isAuth){
            const data = await deletePlaylistService(auth.token,list._id)
            dispatch({
                type: ACTION_TYPE.PLAYLIST_HANDLER,
                payload: data
            })
        }
    }

    const toSinglePlaylist=()=>{
        navigate(`${list._id}`);
    }

  return (
    <div className='playlist-card'>
        <div onClick={()=>toSinglePlaylist()} className='playlist-thumbnail'>
            <img class='image-resp' src='' alt='thumbnail' />
            <div className='playlist-number'>{list.videos.length}</div>
        </div>
        <header className='playlist-desc'>
            {list.title}
            <i
            onClick={()=>deletePlaylistHandler()}
            className='fas fa-trash-alt'
          ></i>
        </header>
    </div>
  )
}
