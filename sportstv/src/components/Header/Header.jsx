import React,{useState} from 'react'
import {useLocation} from 'react-router-dom'
import {useData} from '../../context'
import {ACTION_TYPE} from '../../utils'
import './Header.css'

export const Header = () => {

  const {dispatch} = useData();
  const [search,setSearch] =useState('')
  const {pathname} = useLocation();

  const searchHandler =(e)=>{
    if (e.key === 'Enter' || e.keyCode === 8 || e.target.value === '') {
      dispatch({
        type: ACTION_TYPE.SEARCH,
        payload: e.target.value,
      });
    }
  }

  return (
    <nav className="ecom-nav-container">
            <p className="ecom-nav-title">Sports<span className="header-span-title primary-color">TV</span></p>
            { pathname==='/videos' 
            
                &&
            <div className="ecom-nav-searchbar">
                <input
                onChange={(e)=>{
                  setSearch(e.target.value)
                }}
                onKeyDown={(e)=>searchHandler(e)}
                className="ecom-nav-searchbar-input" type="text" placeholder="Search"/>
                <button onClick={()=>{
                  dispatch({
                    type:ACTION_TYPE.SEARCH,
                    payload:search
                  })
                }} 
                className="search-btn"><i class="fa fa-search "></i></button>
            </div>}
            <div className="ecom-nav-action-btns">
                    <div className="ecom-nav-action-btn badge">
                        <i class="fas fa-user ecom-nav-icon primary-color"></i>
                    </div>
            </div>
        </nav>
  )
}

