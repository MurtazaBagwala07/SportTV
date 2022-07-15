import React from 'react'
import { clearAllHistoryService } from '../../services/services'
import {ACTION_TYPE} from '../../utils'
import {useAuth,useData} from '../../context'
import './History.css'
import { HistoryCard,Sidebar } from '../../components'

export const History = () => {

    const {auth} = useAuth();
    const {state,dispatch} = useData();

    const clearHistory=()=>{
        if(auth.isAuth){
            try {
                (async()=>{
                    const data = await clearAllHistoryService(auth.token);
                    dispatch({
                        type: ACTION_TYPE.HISTORY,
                        payload:data.history,
                    })
                })();
            } catch (error) {
                console.error(error)
            }
        }
    }
  return (
    <div className='history-wrapper'>
        <Sidebar/>
        <div className='history-section'>
            <button className='history-clear-btn' onClick={()=>clearHistory()}>Clear All History</button>
            <div className='history-videos'>
                {state.history.map((vid)=>(
                    <HistoryCard vid={vid}/>
                ))}
            </div>
        </div>
        
    </div>
  )
}

