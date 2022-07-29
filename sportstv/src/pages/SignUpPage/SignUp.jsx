import React,{useState} from 'react'
import { signUpService } from '../../services/services'
import { useNavigate,Link } from 'react-router-dom'
import { toastHandler } from '../../utils'

export const SignUp = () => {

    const navigate = useNavigate()

    const [signUp,setSignUp] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const signUpHandler =async ()=>{
        if(signUp.firstName===''||signUp.lastName===''||signUp.email===''||signUp.password===''){
            toastHandler('warn','Enter correct details')
            return
        }
        const token = await signUpService(signUp.firstName,signUp.lastName,signUp.email,signUp.password)
        if(token){
            toastHandler('success','Signed Up Successful')
            navigate('/signin')
        }
    }

  return (
    <div className='auth-page'>
        <div className='auth-container'>
            <div >
                <h2 className='auth-title'>Sign Up</h2>
            </div>
            
            <div className='auth-input'>
                <label className='auth-text'>First Name</label>
                <input className='auth-type' onChange={(e)=>{setSignUp({...signUp,firstName:e.target.value})}} value={signUp.firstName} type="text" />
            </div>

            <div className='auth-input'>
                <label className='auth-text'>Last Name</label>
                <input className='auth-type' onChange={(e)=>{setSignUp({...signUp,lastName:e.target.value})}} value={signUp.lastName} type="text" />
            </div>

            <div className='auth-input'>
                <label className='auth-text'>Email</label>
                <input className='auth-type' onChange={(e)=>{setSignUp({...signUp,email:e.target.value})}} value={signUp.email} type="email" />
            </div>

            <div className='auth-input'>
                <label className='auth-text'>Password</label>
                <input className='auth-type' onChange={(e)=>{setSignUp({...signUp,password:e.target.value})}} value={signUp.password} type="password" />
            </div>

            <div className='auth-action-btns'>
                <button className='auth-action-btn' onClick={()=>signUpHandler()}>Create a new account</button>
            </div>

            <div className='auth-redirect'>
                <p>Have a account already? <Link className='auth-link' to='/signin'>Sign In</Link></p>
            </div>
        </div>
    </div>
  )
}
