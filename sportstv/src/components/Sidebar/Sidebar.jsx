import React from 'react'
import { RiPlayListAddFill } from "react-icons/ri";
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <aside className='sidebar-wrapper'>
        <div className='sidebar-item'>
            <i class="fas fa-home"></i>Home
        </div>
        <div className='sidebar-item'>
            <i class="far fa-compass"></i> Explore
        </div>
        <div className='sidebar-item'>
            <RiPlayListAddFill/> Playlists
        </div>
        <div className='sidebar-item'>
            <i class="fas fa-thumbs-up"></i> Liked
        </div>
        <div className='sidebar-item'>
            <i class="fas fa-history"></i> History
        </div>
        <div className='sidebar-item'>
            <i class="far fa-clock"></i> Watch Later
        </div>
        
    </aside>
  )
}

