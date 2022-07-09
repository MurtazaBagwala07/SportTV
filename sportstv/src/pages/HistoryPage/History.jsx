import React from 'react'
import { clearAllHistoryService } from '../../services/services'
import {ACTION_TYPE} from '../../utils'
import {useAuth,useData} from '../../context'
import './History.css'

export const History = () => {

    const {auth} = useAuth();
    const {dispatch} = useData();

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
    <div>
        History Page
        <button onClick={()=>clearHistory()}>Clear All History</button>
    </div>
  )
}

