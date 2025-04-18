import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
    const { logout } = useAuth();
    
    return (
        <nav className="border m-2 p-4 rounded-3xl bg-gradient-to-r from-indigo-200 to-purple-200">
            <div className="grid grid-cols-4 gap-4 justify-items-center">
                <Link to="/home">
                    <div className="text-lg font-semibold py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-200">
                        Home
                    </div>
                </Link>
                
                <Link to="/redeem">
                    <div className="text-lg font-semibold py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-200">
                        Redeem
                    </div>
                </Link>

                <Link to="/history">
                    <div className="text-lg font-semibold py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-200">
                        History
                    </div>
                </Link>

                <button
                    className="bg-black text-white py-2 px-5 rounded-2xl hover:bg-gray-800 transition duration-200"
                    onClick={logout}
                >
                    Log Out
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
