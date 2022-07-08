import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../context'
import './Profile.css'

export const Profile = () => {

  const navigate = useNavigate()

  const {auth , setAuth} = useAuth();

  const name= localStorage.getItem('userName')
  const email = localStorage.getItem('userEmail')

  const logoutHandler=()=>{
    setAuth({token:'',isAuth:false})
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('userName')
    localStorage.removeItem('userEmail')
    navigate("/") 
  }

  return (
    <div className='profile-page'>
        <div className='profile-card'>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <button onClick={()=>logoutHandler()}>Logout</button>
        </div>
    </div>
  )
}

