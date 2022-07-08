import {createContext, useContext,useEffect,useState} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [auth,setAuth] = useState(({token:'',isAuth:false}))
    const [user,setUser] = useState('')

    useEffect(()=>{
        const token = localStorage.getItem('token')
        token?setAuth({token,isAuth:true}) : setAuth({token:'',isAuth:false})
    },[])

    return (
        <AuthContext.Provider value={{auth,setAuth,user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>useContext(AuthContext)