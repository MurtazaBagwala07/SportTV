import React from 'react'
import {Footer} from '../../components'
import HeroImg from '../../assets/dhoni.jpg'
import Football from '../../assets/modric.jpg' 
import Chess from '../../assets/magnus.jpeg'
import Tennis from '../../assets/nadal.jpg'
import Cricket from '../../assets/kohli.jpg'
import { useNavigate } from 'react-router-dom'
import './Homepage.css'
 
export const Homepage = () => {
  const navigate = useNavigate()
  return (
    <>
        <div className="homepage-container">
            <div className='hero-container'>
                <div className='hero-para'>
                    <p className='hero-title'>Best of Sports</p>
                    <p className='hero-description'>Watch sports in their best form at SportsTV</p>
                    <button onClick={()=>navigate('/videos')} className='hero-button'>Explore Now</button>
                </div>
                <img className='hero-img' src={HeroImg} alt="hero-img" />
            </div>
            <hr className='hr'/>
            <div className='homepage-category-container'>
              <p className='categories-title'>Sports to Enjoy</p>
              <div className='homepage-categories'>
                
                <div className="category-container">
                    <div className='category-para'>
                      <p className='category-title'>Cricket</p>
                      <p className='category-description'>A gentlemans game</p>
                      <button className='category-button'>Cricket</button>
                    </div>
                    <img className='category-img' src={Cricket}  alt="football" />
                  </div>

                  <div className="category-container">
                    <div className='category-para'>
                      <p className='category-title'>Chess</p>
                      <p className='category-description'>A Mindful game</p>
                      <button className='category-button'>Chess</button>
                    </div>
                    <img className='category-img' src={Chess}  alt="football" />
                  </div>

                  <div className="category-container">
                    <div className='category-para'>
                      <p className='category-title'>Football</p>
                      <p className='category-description'>A sport to die for</p>
                      <button className='category-button'>Football</button>
                    </div>
                    <img className='category-img' src={Football}  alt="football" />
                  </div>

                  <div className="category-container">
                    <div className='category-para'>
                      <p className='category-title'>Tennis</p>
                      <p className='category-description'>Game of Gods</p>
                      <button className='category-button'>Tennis</button>
                    </div>
                    <img className='category-img' src={Tennis}  alt="football" />
                  </div>
              </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

