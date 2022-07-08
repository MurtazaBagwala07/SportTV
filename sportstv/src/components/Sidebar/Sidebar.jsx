import React from 'react'
import {NavLink} from 'react-router-dom'
import { RiPlayListAddFill } from "react-icons/ri";
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <ul className='sidebar-wrapper'>
        <NavLink 
            to='/'
            activeClassName='active-sidebar' 
            className='sidebar-item'>
            <i class="fas fa-home"></i>Home
        </NavLink>
        
        <NavLink
            to='/videos'
            activeClassName='active-sidebar' 
            className='sidebar-item'>
            <i class="far fa-compass"></i> Explore
        </NavLink>
        
        <NavLink 
            to='/playlist'
            activeClassName='active-sidebar' 
            className='sidebar-item'>
            <RiPlayListAddFill/> Playlists
        </NavLink>
        
        <NavLink to='/liked'
            activeClassName='active-sidebar' 
            className='sidebar-item'>
            <i class="fas fa-thumbs-up"></i> Liked
        </NavLink>
        
        <NavLink to='/history'
            activeClassName='active-sidebar' 
            className='sidebar-item'>
            <i class="fas fa-history"></i> History
        </NavLink>
        
        <NavLink to='/watchlater'
            activeClassName='active-sidebar' 
            className='sidebar-item'>
            <i class="far fa-clock"></i> Watch Later
        </NavLink>
    </ul>
  )
}

