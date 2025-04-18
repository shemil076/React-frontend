
import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/user";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { formatUser } from "../lib/utils/user";


interface AuthContextType{
    user : User | null;
    token : string | null;
    login : (phoneNumber: string, password: string) => Promise<void>;
    register : (phoneNumber: string, password: string, firstName: string, lastName: string) => Promise<void>;
    logout :() => void
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


const AuthProvider : React.FC<React.PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string| null>(localStorage.getItem('token'));
    const navigate = useNavigate();

    
    useEffect(()=>{
        const getUser = async () => {
            if(token){
                axios.get(`http://localhost:8080/api/user`,{
                    headers: {
                        Authorization : `Bearer ${token}`
                    }
                })
                .then((response) => {
                    console.log("Response user", response.data);

                    setUser(formatUser(response.data))
                    navigate("/earn")
                })
                .catch((err)=>{
                    console.log("error occurred", err)
                    logout()
                })
            }else{
                logout()
                navigate("/")
            }
        };
        getUser()
    },[token])


    const login = async (phoneNumber: string, password: string) =>{
        console.log("running")
        axios.post(`http://localhost:8080/api/login`,{
            phoneNumber,
            password
        })
        .then((response)=>{
            console.log("Login response", response.data)
            setToken(response.data.token)
            setUser(response.data.user)
            localStorage.setItem('token', response.data.token);
        })
    }

    const register = async (phoneNumber: string, password: string, firstName: string, lastName: string) => {
        axios.post(`http://localhost:8080/api/signup`,{
            phoneNumber,
            password,
            firstName,
            lastName
        })
        .then((response)=>{
            console.log("registration response", response.data)
        })
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{user, token, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () : AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}