import React from 'react'
import {useAuth,useData} from '../../context'
import {useNavigate} from 'react-router-dom'
import { addToHistoryService,deleteFromHistoryService } from '../../services/services'
import {ACTION_TYPE} from '../../utils'
import '../VideoCard/VideoCard.css'

export const HistoryCard = ({vid}) => {

    const {auth} = useAuth();
    const {dispatch} = useData();
    const navigate = useNavigate();

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

    const deleteFromHistory =async()=>{
        if(auth.isAuth){
            try {
                (async ()=>{
                    const data = await deleteFromHistoryService(vid, auth.token)
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
                <i onClick={()=>deleteFromHistory()} class="fas fa-trash"></i>
            </div>
            
            <p className='video-main'>
                <span className='video-creator video-detail'>{vid.creator}</span>
            </p>
            
        </div>
    </>
  )
}

