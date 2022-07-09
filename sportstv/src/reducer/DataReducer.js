import { ACTION_TYPE } from "../utils";

export const InitialState={
    videos:[], 
    categories:[],
    like:[],
    watchLater:[],
    history: [],
    playlist: [],
    sortBy:'',
    search:'',
}

export const DataReducer=(state,action)=>{
    switch(action.type) {
        case ACTION_TYPE.INITIAL_DATA:{
            return {
                ...state, videos:action.payload,
            }
        }

        case ACTION_TYPE.INITIAL_CAT:{
            return {
                ...state, categories:[
                    ...action.payload.map((cat) => ({
                        ...cat,
                        isActive: cat.categoryName === 'All' ? true : false,
                      })),
                ],
            }
        }
    
        case ACTION_TYPE.CATEGORIES:{
            return {
                ...state, categories:action.payload,
            }
        }

        case ACTION_TYPE.LIKE_HANDLER:{
            return {
                ...state,like:action.payload
            }
        }

        case ACTION_TYPE.HISTORY:{
            return {
                ...state,history:action.payload
            }
        }

        case ACTION_TYPE.SORTBY:{
            return {
                ...state,sortBy:action.payload
            }
        }

        case ACTION_TYPE.SEARCH:{
            return {
                ...state,search:action.payload
            }
        }

        default:
            return state;
    }
}