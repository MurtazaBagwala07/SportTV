import React from 'react'
import {NavLink} from 'react-router-dom'
import { RiPlayListAddFill } from "react-icons/ri";
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <ul className='sidebar-wrapper'>
        <NavLink 
            to='/'
            className={({isActive})=>isActive?'sidebar-item active-sidebar':'sidebar-item'}>
            <i class="fas fa-home"></i>Home
        </NavLink>
        
        <NavLink
            to='/videos'
            className={({isActive})=>isActive?'sidebar-item active-sidebar':'sidebar-item'}>
            <i class="far fa-compass"></i> Explore
        </NavLink>
        
        <NavLink 
            to='/playlist'
            className={({isActive})=>isActive?'sidebar-item active-sidebar':'sidebar-item'}>
            <RiPlayListAddFill/> Playlists
        </NavLink>
        
        <NavLink to='/liked'
            className={({isActive})=>isActive?'sidebar-item active-sidebar':'sidebar-item'}>
            <i class="fas fa-thumbs-up"></i> Liked
        </NavLink>
        
        <NavLink to='/history'
            className={({isActive})=>isActive?'sidebar-item active-sidebar':'sidebar-item'}>
            <i class="fas fa-history"></i> History
        </NavLink>
        
        <NavLink to='/watchlater'
            className={({isActive})=>isActive?'sidebar-item active-sidebar':'sidebar-item'}>
            <i class="far fa-clock"></i> Watch Later
        </NavLink>
    </ul>
  )
}

