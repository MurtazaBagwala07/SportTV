import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addToHistoryService, addToWatchLaterService, createNewPlaylistService,removeFromWatchLaterService , addVideoToPlaylistService, removeVideoFromPlaylistService} from '../../services/services'
import { ACTION_TYPE , toastHandler} from '../../utils'
import {useAuth,useData} from '../../context'
import './VideoCard.css'

export const VideoCard = ({vid}) => {

    const {auth} = useAuth();
    const {state,dispatch,modal,setModal,modalData,setModalData} = useData();
    const navigate = useNavigate();
    const [showModal,setShowModal] = useState(false)
    const [playlistInput,setPlaylistInput] = useState('')
    
    const isInWatchLater = state.watchLater.find(
        (element) => element._id === vid._id
      );

    const toSingleVideoPage=()=>{
        navigate(`/video/${vid._id}`)
        if(auth.isAuth){
            try {
                (async () => {
                    const data = await addToHistoryService(vid, auth.token);
                      dispatch({
                        type: ACTION_TYPE.HISTORY,
                        payload:data.history
                      });
                  })();
            } catch (error) {
                console.error(error)
            }
        }
    }

    const openPlaylistModal=()=>{
        if(auth.isAuth){
            setModal(true)
            setModalData(vid)
        }else{
            toastHandler('error','You must be logged in')
            setShowModal(false)
        }
        
    }

    const createPlaylistHandler =async()=>{
        if(playlistInput.trim().length>0){
            const data = await createNewPlaylistService(auth.token, playlistInput)
            toastHandler('success','Playlist created')
            dispatch({
                type: ACTION_TYPE.PLAYLIST_HANDLER,
                payload: data
            })
            setPlaylistInput('')
            setShowModal(false)
        }
    }

    const watchLaterHandler = async()=> {

        if(auth.isAuth){
            if(isInWatchLater){
                removeWatchLaterHandler()
            }
            else{
                const data =  await addToWatchLaterService(vid,auth.token)
                if(data){
                    toastHandler('success','Added to watchLater')
                    dispatch({
                        type:ACTION_TYPE.WATCHLATER_HANDLER,
                        payload : data.watchlater
                    })
                }
            }  
        }else{
            toastHandler('error','You must be logged in')
            setShowModal(false)
        }

        
    }

    const removeWatchLaterHandler=async()=>{
        const data  = await removeFromWatchLaterService(vid,auth.token)
        if(data){
            toastHandler('success','Removed from watchlater')
            dispatch({ 
                type:ACTION_TYPE.WATCHLATER_HANDLER,
                payload : data.watchlater
            })
        }
    }


    const addVideoToPlaylist=async(id)=>{
        const data = await addVideoToPlaylistService(auth.token,id,modalData)
        toastHandler('success','Added to playlist')
        dispatch({
            type:ACTION_TYPE.PLAYLIST_VIDEO_HANDLER,
            payload:data.playlist
        })
    }

    const removeVideoFromPlaylist=async(id)=>{
        const data  = await removeVideoFromPlaylistService(auth.token,id,modalData)
        toastHandler('success','Removed from playlist')
        dispatch({
            type:ACTION_TYPE.PLAYLIST_VIDEO_HANDLER,
            payload:data.playlist
        })
    }
    

  return (
    <>
        <div className='video-card'>
            <div className='video-thumbnail' onClick={()=>toSingleVideoPage()}>
                <img className='img-resp' src={`https://i.ytimg.com/vi/${vid._id}/0.jpg`} alt="video-thumbnail" />
            </div>
            
            <div className='video-main'>
                <header className='video-heading'>
                    {vid.title}
                </header>
                <div className='video-card-actions'>
                    <i onClick={()=>setShowModal(!showModal)} class="fas fa-ellipsis-v"></i>
                    <div className={`card-modal ${showModal?'modal-show':'modal-hide'}`}>
                        <p onClick={()=>openPlaylistModal()} className='modal-text'>
                            <i className='fas fa-save'></i>
                            <p>Add to Playlist</p>
                        </p>
                        <p onClick={()=>watchLaterHandler()} className='modal-text'>
                            <i className='fas fa-clock'></i>
                            <p>{isInWatchLater?'Remove From Watchlater' : 'Add to Watchlater'}</p>
                        </p>
                    </div>
                </div>
            </div>
            
            <p className='video-main'>
                <span className='video-creator video-detail'>{vid.creator}</span>
                <span className='video-date video-detail'>{vid.uploadDate}</span>
            </p>
        </div>

        <div className={`playlist-modal ${modal?'modal-show':'modal-hide'}`}>
            <div className="playlist-modal-wrapper">
                <h4 className='playlist-modal-title'>
                    Add To :
                    <i
                    className='playlist-modal-close fa fa-times'
                    aria-hidden='true'
                    onClick={() => setModal(!modal)}
                    />
                </h4>
                {state.playlists.map((list)=>{
                    const inPlaylist = list.videos?.some(
                        (list) => {
                            return list._id === modalData._id
                        }
                      );
                    return(
                        <div key={list._id}>
                            <label className="playlist-list">
                                <input 
                                    type='checkbox'
                                    checked={inPlaylist}
                                    onChange={(e)=>e.target.checked?addVideoToPlaylist(list._id):removeVideoFromPlaylist(list._id)}
                                />
                                <span>{list.title}</span>
                            </label>
                        </div>
                    );
                })}
                <div className='playlist-modal-input'>
                    <label>
                        Name : 
                        <input className='playlist-modal-input-text' type='text' value={playlistInput} onChange={(e)=>setPlaylistInput(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <button className='playlist-modal-btn' onClick={()=>createPlaylistHandler()}>
                        Create New Playlist
                    </button>
                </div>
            </div>
        </div>

    </>
  )
}
