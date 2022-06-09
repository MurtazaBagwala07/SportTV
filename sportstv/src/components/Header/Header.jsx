import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <nav className="ecom-nav-container">
            <p className="ecom-nav-title">Sports<span className="header-span-title primary-color">TV</span></p>
            <div className="ecom-nav-searchbar">
                <input className="ecom-nav-searchbar-input" type="text" placeholder="Search"/>
                <button className="search-btn"><i class="fa fa-search "></i></button>
            </div>
            <div className="ecom-nav-action-btns">
                    <div className="ecom-nav-action-btn badge">
                        <i class="fas fa-user ecom-nav-icon primary-color"></i>
                    </div>
            </div>
        </nav>
  )
}

