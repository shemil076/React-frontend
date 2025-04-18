import { useState } from "react";
import { useAuth } from "../context/AuthContext";


interface LoginProps {
    setIsLogin: (arg0: boolean) => void
}
const Login: React.FC<LoginProps> = ({ setIsLogin }) => {

    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [password, setPassword]= useState<string | null>(null);
     const { login } = useAuth();

     const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        if(password && phoneNumber){
            try{
                await login(phoneNumber, password)
            }catch(error){
                console.log("Error occurred when registering", error)
            }
        }
        
    }

    return (
        <div className="z-10 ">
            <div className="w-full h-screen flex items-center justify-center inset-9">
                <div className="grid grid-cols-1 border p-10 px-12 rounded-xl shadow-xl bg-white">
                    <div className="m-6 space-y-2" >
                        <div className=" text-2xl text-center  font-bold">Welcome!</div>

                        <div className="text-sm text-gray-500 ">Please enter your details to login</div>
                    </div>

                    <div className="flex flex-col">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="flex flex-col">
                                    <input type="text"
                                        placeholder="Phone Number i.e +94764259425"
                                        onChange={e => setPhoneNumber(e.target.value)}
                                        className="w-full px-1 rounded-none shadow-none border-0 border-b border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-0  mb-5" />
                                </div>

                                <div className="flex flex-col">
                                    <input type="text"
                                        placeholder="Password"
                                        onChange={e => setPassword(e.target.value)}
                                        className="w-full px-3 rounded-none shadow-none border-0 border-b border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-0  mb-5" />
                                </div>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-gray-500 duration-500  text-white p-1 w-full rounded font-thin"
                                type="submit" >Login</button>
                            </div>

                            <div className="justify-items-center">
                               <div className="flex flex-row mt-3 text-sm ">
                               <div className="mr-2">Haven't registered yet?</div>
                               <button onClick={() => setIsLogin(false)} className="underline text-purple-500">Signup</button>
                               </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;