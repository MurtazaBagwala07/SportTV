import React from 'react'
import {Sidebar,VideoCard} from '../../components'
import { ACTION_TYPE } from '../../utils'
import {useData} from '../../context'
import { searchVideos,sortVideosCategory } from '../../services/services'
import './VideoListingPage.css'

export const VideoListingPage = () => {

  const {state,dispatch} = useData();

  const sortingCategory =(cat)=>{
    
    dispatch({
      type: ACTION_TYPE.SORTBY,
      payload:cat,
    })

    let newCat = state.categories.map((ele)=>({
      ...ele,isActive:ele.categoryName===cat?true:false
    }))

    dispatch({
      type: ACTION_TYPE.CATEGORIES,
      payload:newCat
    })
  }

  const searchByName = searchVideos([...state.videos], state.search);
  const sortByCategory = sortVideosCategory(searchByName, state.sortBy);

  
  return (
    <>
    <div className='videolisting-page-wrapper'>
        <Sidebar/>
        <div className='videolisting-section'>
            <div className="videolisting-page-chips">
              {
                state.categories.map((cat)=>(
                  <div 
                  key={cat.id} 
                  onClick={()=>sortingCategory(cat.categoryName)}
                  className={cat.isActive?"video-type-chip active-chip":"video-type-chip"}>
                    {cat.categoryName}
                </div>
                ))
              }

            </div>
            <div className="videolisting-videos">
              {sortByCategory.map((vid)=>(
                <VideoCard vid={vid} key={vid._id}/>
              ))}
            </div>
            
        </div>   
    </div>
    </>
  )
}

