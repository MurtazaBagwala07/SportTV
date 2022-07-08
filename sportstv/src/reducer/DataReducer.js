import { ACTION_TYPE } from "../utils";

export const InitialState={
    videos:[], 
    categories:[],
    like:[],
    watchLater:[],
    history: [],
    playlist: [],
}

export const DataReducer=(state,action)=>{
    switch(action.type) {
        case ACTION_TYPE.INITIAL_DATA:{
            return {
                ...state, videos:action.payload,
            }
        }
    
        case ACTION_TYPE.CATEGORIES:{
            return {
                ...state, categories:[
                    ...action.payload.map((cat) => ({
                        ...cat,
                        isActive: cat.categotyName === 'ALL' ? true : false,
                      })),
                ],
            }
        }

        default:
            return state;
    }
}