import { useState } from "react"
import { useAuth } from "../context/AuthContext";



interface SignupProps {
    setIsLogin: (arg0: boolean) => void
}

const Signup: React.FC<SignupProps> = ({setIsLogin}) => {
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [password, setPassword]= useState<string | null>(null);
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null); 
    const { register, isError } = useAuth();

    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        if(password && phoneNumber && firstName && lastName){
            try{
                await register(phoneNumber, password, firstName, lastName)


                if(isError){
                    setIsLogin(true)
                }
                
            }catch(error){
                console.log("Error occurred when registering", error)
            }
        }
        
    }
    return (
        <div className="z-10">
            <div className="w-full h-screen flex items-center justify-center inset-9">
                <div className="grid grid-cols-1 border p-10 rounded-xl shadow-xl bg-white">
                    <div className="m-6 space-y-2" >
                        <div className=" text-2xl text-center  font-bold">Register now!</div>

                        <div className="text-sm text-gray-500 ">Please enter your details to register</div>
                    </div>

                    <div className="flex flex-col">
                        <form onSubmit={handleSubmit}>
                            <div>
                            <div className="flex flex-col">
                                    <input type="text"
                                        placeholder="First Name"
                                        onChange={e => setFirstName(e.target.value)}
                                        className="w-full px-3 rounded-none shadow-none border-0 border-b border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-0  mb-5" />
                                </div>
                                <div className="flex flex-col">
                                    <input type="text"
                                        placeholder="Last Name"
                                        onChange={e => setLastName(e.target.value)}
                                        className="w-full px-3 rounded-none shadow-none border-0 border-b border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-0  mb-5" />
                                </div>
                                <div className="flex flex-col">
                                    <input type="text"
                                        placeholder="Phone Number i.e +94764259425"
                                        onChange={e => setPhoneNumber(e.target.value)}
                                        className="w-full px-3 rounded-none shadow-none border-0 border-b border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-0  mb-5" />
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
                                type="submit">Register</button>
                            </div>

                            <div className="justify-items-center">
                               <div className="flex flex-row mt-3 text-sm ">
                               <div className="mr-2">Already registered?</div>
                               <button onClick={() => setIsLogin(true)} className="underline text-blue-500">Login</button>
                               </div>
                            </div>                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;