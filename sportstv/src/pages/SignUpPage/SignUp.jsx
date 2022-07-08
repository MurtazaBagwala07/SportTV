import React,{useState} from 'react'
import { signUpService } from '../../services/services'
import { useNavigate,Link } from 'react-router-dom'

export const SignUp = () => {

    const navigate = useNavigate()

    const [signUp,setSignUp] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const signUpHandler =async ()=>{
        const token = await signUpService(signUp.firstName,signUp.lastName,signUp.email,signUp.password)
        if(token){
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
                <label>First Name</label>
                <input onChange={(e)=>{setSignUp({...signUp,firstName:e.target.value})}} value={signUp.firstName} type="text" />
            </div>

            <div className='auth-input'>
                <label>Last Name</label>
                <input onChange={(e)=>{setSignUp({...signUp,lastName:e.target.value})}} value={signUp.lastName} type="text" />
            </div>

            <div className='auth-input'>
                <label>Email</label>
                <input onChange={(e)=>{setSignUp({...signUp,email:e.target.value})}} value={signUp.email} type="text" />
            </div>

            <div className='auth-input'>
                <label>Password</label>
                <input onChange={(e)=>{setSignUp({...signUp,password:e.target.value})}} value={signUp.password} type="text" />
            </div>

            <div className='auth-action-btns'>
                <button onClick={()=>signUpHandler()}>Create a new account</button>
            </div>

            <div className='auth-redirect'>
                <p>Have a account already? <Link to='/signin'>Sign In</Link></p>
            </div>
        </div>
    </div>
  )
}

