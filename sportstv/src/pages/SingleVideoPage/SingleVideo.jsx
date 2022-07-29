import React,{useState} from 'react'
import {Sidebar} from '../../components'
import {useParams} from 'react-router-dom'
import {useData,useAuth} from '../../context'
import { likeVideoService,removeLikeVideoService, addToWatchLaterService, removeFromWatchLaterService } from '../../services/services'
import { ACTION_TYPE, toastHandler } from '../../utils'
import './SingleVideo.css'

export const SingleVideo = () => {

    const {auth} = useAuth();
    const {videoID} = useParams();
    const {state,dispatch} = useData();
    const [copied,setCopied] = useState(false)

    const video = state.videos?.find((vid)=>vid._id === videoID);
    const isLiked =state.like?.find((ele)=>ele._id===video._id)
    const inWatchLater = state.watchLater?.find((ele)=>ele._id===video._id)
    

    const likeHandler=async()=>{
        if(auth.isAuth){
            if(isLiked){
                removeLikeHandler()
            }else{
                const data = await likeVideoService(video,auth.token)
            if(data){
                toastHandler('success','Liked Successfully')
                dispatch({
                    type:ACTION_TYPE.LIKE_HANDLER,
                    payload:data.likes
                })
            }
            }
        }else{
            toastHandler('error','You must be logged in')
        }
    }

    const removeLikeHandler=async()=>{
        const data = await removeLikeVideoService(video,auth.token)
        if(data){
            toastHandler('success','Unliked Successfully')
            dispatch({
                type:ACTION_TYPE.LIKE_HANDLER,
                payload:data.likes
            })
        }
    }

    const watchLaterHandler = async()=> {
        if(auth.isAuth){
            if(inWatchLater){
                removeWatchLaterHandler()
            }
            else{
                const data =  await addToWatchLaterService(video,auth.token)
                if(data){
                    toastHandler('success','Added to watchlater')
                    dispatch({
                        type:ACTION_TYPE.WATCHLATER_HANDLER,
                        payload : data.watchlater
                    })
                }
            }
        }else{
            toastHandler('error','You must be logged in')
        }
    }

    const removeWatchLaterHandler=async()=>{
        const data  =  await removeFromWatchLaterService(video,auth.token)
        if(data){
            toastHandler('success','Removed from watchlater')
            dispatch({ 
                type:ACTION_TYPE.WATCHLATER_HANDLER,
                payload : data.watchlater
            })
        }
    }

    const copyHandler = () => {
        navigator.clipboard.writeText(
          `https://sport-tv.vercel.app/video/${videoID}`
        );
        toastHandler('success','Link copied')
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        },10000)
      };

  return (
    <div className='singlevideo-page'>
        <Sidebar/>
        <div className='video-play-container'>
        <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${videoID}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen=''
          ></iframe>
          <div className='video-footer'>
            <div className='video-headers'>
                <h2 className='video-title'>
                    {video?.title}
                </h2>
                <h5 className='video-created'>
                    {video?.creator}
                </h5>
                <small className='video-date'>
                    {video?.uploadDate}
                </small>
            </div>
            <div className='video-action-btns'>
                <button onClick={()=>likeHandler()} className={`action-btn ${isLiked?'action-btn-active':''}`}>
                    <i class="fas fa-thumbs-up "></i> {isLiked?'Liked':'Like'}
                </button>
                <button onClick={()=>watchLaterHandler()} className={`action-btn ${inWatchLater?'action-btn-active':''}`}>
                    <i class="far fa-clock "></i> {inWatchLater?'In Watch Later':'Add to Watch Later'}
                </button>
                <button onClick={()=>copyHandler()} className={`action-btn ${copied?'action-btn-active':''}`}>
                    <i class="fas fa-copy "></i> {copied?'Copied':'Copy Link'}
                </button>
            </div> 
          </div>
          <div className='video-description'>
                <h4>Description:</h4>
                <p>{video?.description}</p>
          </div>
        </div>
    </div>
  )
}
