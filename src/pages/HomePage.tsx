import { useNavigate } from "react-router-dom";
import BalanceCard from "../components/BalanceCard";
import EarnCard from "../components/EarnCard";
import { useAlert } from "../context/AlertContext";
import { useAuth } from "../context/AuthContext";
import { useBalance } from "../hooks/useLoyalty";

const HomePage: React.FC = () => {
    const { user } = useAuth();
    const {showAlert} = useAlert()
    const navigate = useNavigate()

    if (!user) {
        return <>No user</>;
    }

    return (
        <div className="w-full h-[calc(100vh-99px)] bg-gradient-to-br from-indigo-50 to-purple-100 overflow-y-hidden">
          {/* Top Right Button */}
          <div className="flex flex-row- mx-5 mt-4 justify-between justify-items-center">

            <div className="">Hello there, </div>
            <button
              className="px-8 py-2 rounded-full bg-purple-700 text-white shadow-md hover:bg-purple-800 transition duration-200"
              onClick={() => navigate("/earn")}
            >
              Earn Points
            </button>
          </div>
      
          {/* Center Content */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="sm:w-auto mx-3 w-full mb-20">
              <div>
                <BalanceCard user={user} />
              </div>
            </div>
          </div>
        </div>
      );
      
};

export default HomePage;
