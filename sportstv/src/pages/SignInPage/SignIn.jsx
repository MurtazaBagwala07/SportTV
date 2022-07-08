import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import {loginService} from '../../services/services'
import {useAuth} from  '../../context'
import './auth.css'

export const SignIn = () => {

    const navigate=useNavigate();

    const {auth,setAuth} =useAuth();

    const [login, setLogin] = useState({
        email: '',
        password: '',
      });

      const loginHandler=async()=>{
        console.log(login)
        const data = await loginService(login.email, login.password)
        if(data){
            localStorage.setItem("token", data.encodedToken)
            localStorage.setItem("isAuth", true)
            localStorage.setItem("userName", data.foundUser.firstName)
            localStorage.setItem("userEmail", data.foundUser.email)
            setAuth({ ...auth, token: data.encodedToken, isAuth: true })
            navigate("/videos")
        }
      }

      const guestLogin=async()=>{
        setLogin({email:'adarshbalika@gmail.com',password:'adarshBalika123'})
        const data = await loginService('adarshbalika@gmail.com', 'adarshBalika123')
        if(data){
            localStorage.setItem("token", data.encodedToken)
            localStorage.setItem("isAuth", true)
            localStorage.setItem("userName", data.foundUser.firstName)
            localStorage.setItem("userEmail", data.foundUser.email)
            setAuth({ ...auth, token: data.encodedToken, isAuth: true })
            navigate("/videos")
        }
      }

  return (
    <div className='auth-page'>
        <div className='auth-container'>
            <div >
                <h2 className='auth-title'>Sign In</h2>
            </div>
            
            <div className='auth-input'>
                <label>Email</label>
                <input onChange={(e)=>setLogin({...login,email: e.target.value})} value={login.email} type="text" />
            </div>

            <div className='auth-input'>
                <label>Password</label>
                <input onChange={(e)=>setLogin({...login,password: e.target.value})} value={login.password}  type="text" />
            </div>

            <div className='auth-action-btns'>
                <button onClick={()=>loginHandler()}>Sign In</button>
                <button onClick={()=>guestLogin()}>Sign In with Test Credentials</button>
            </div>

            <div className='auth-redirect'>
                <p>Haven't created an account yet? <Link to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    </div>
  )
}

