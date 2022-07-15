import {createContext, useContext, useEffect, useReducer, useState} from 'react'
import {getVideosService,getCategoryService} from '../services/services'
import {DataReducer,InitialState} from '../reducer/DataReducer'
import {ACTION_TYPE} from '../utils'

const DataContext = createContext()

const DataProvider=({children})=>{
    const [state,dispatch] = useReducer(DataReducer,InitialState);
    const [modal,setModal] = useState(false)
    const [modalData, setModalData] = useState(false);

    
    useEffect(()=>{
        (async ()=>{
            try {
                const videosData = await getVideosService();
                if(videosData.status===200){
                    dispatch({
                        type: ACTION_TYPE.INITIAL_DATA,
                        payload:videosData.data.videos,
                    })
                }
            } catch (error) {
                console.error(error)
            }
        })();
    },[]);

    useEffect(()=>{
        (async ()=>{
            try {
                const categoryData= await getCategoryService();
                if(categoryData.status===200){
                    dispatch({
                        type: ACTION_TYPE.INITIAL_CAT,
                        payload:categoryData.data.categories,
                    })
                }
            } catch (error) {
                console.error(error)
            }
        })();
    },[])
    
    return(
        <DataContext.Provider value={{state,dispatch,modal,setModal,modalData,setModalData}}>
            {children}
        </DataContext.Provider>
    );
};

const useData= ()=>useContext(DataContext);

export {useData,DataProvider};