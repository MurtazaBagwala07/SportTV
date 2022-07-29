import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import {loginService} from '../../services/services'
import {useAuth} from  '../../context'
import { toastHandler } from '../../utils'
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
        if(login.email===''||login.password===''){
            toastHandler('warn','Enter correct details')
            return
        }
        const data = await loginService(login.email, login.password)
        if(data){
            localStorage.setItem("token", data.encodedToken)
            localStorage.setItem("isAuth", true)
            localStorage.setItem("userName", data.foundUser.firstName)
            localStorage.setItem("userEmail", data.foundUser.email)
            setAuth({ ...auth, token: data.encodedToken, isAuth: true })
            toastHandler('success','Login successful')
            navigate("/videos")
        }
      }

      const guestLogin=async()=>{
        setLogin({email:'murtaza@gmail.com',password:'murtaza123'})
        const data = await loginService('murtaza@gmail.com', 'murtaza123')
        if(data){
            localStorage.setItem("token", data.encodedToken)
            localStorage.setItem("isAuth", true)
            localStorage.setItem("userName", data.foundUser.firstName)
            localStorage.setItem("userEmail", data.foundUser.email)
            setAuth({ ...auth, token: data.encodedToken, isAuth: true })
            toastHandler('success','Login successful')
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
                <label className='auth-text'>Email</label>
                <input className='auth-type' onChange={(e)=>setLogin({...login,email: e.target.value})} value={login.email} type="email" />
            </div>

            <div className='auth-input'>
                <label>Password</label>
                <input className='auth-type' onChange={(e)=>setLogin({...login,password: e.target.value})} value={login.password}  type="password" />
            </div>

            <div className='auth-action-btns'>
                <button className='auth-action-btn' onClick={()=>loginHandler()}>Sign In</button>
                <button className='auth-action-btn' onClick={()=>guestLogin()}>Sign In with Test Credentials</button>
            </div>

            <div className='auth-redirect'>
                <p>Haven't created an account yet? <Link className='auth-link' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    </div>
  )
}

