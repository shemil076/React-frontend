import { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";

const AuthPage: React.FC = () => {

    const [isLogin, setIsLogin] = useState<boolean>(false);
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center z-0"
            style={{ backgroundImage: "url('/assets/home-bg.jpg')" }}
        >
            {isLogin ? 
            <Login setIsLogin={setIsLogin}/>: 
            
            <Signup setIsLogin={setIsLogin}/>}
        </div>
    );
}

export default AuthPage;