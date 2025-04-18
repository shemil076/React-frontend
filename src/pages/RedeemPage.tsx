import EarnCard from "../components/EarnCard";
import RedeemCard from "../components/ReddeemCard";
import { useAuth } from "../context/AuthContext";

const RedeemPage : React.FC = () => {
    const { user } = useAuth();

    if (!user) {
        return <>No user</>;
    }
    return (
        <div className="w-full h-[calc(100vh-99px)] bg-gradient-to-l from-green-100 to-blue-200 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center p-6">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
              <RedeemCard userId={user.id} />
            </div>
          </div>
        </div>
      );
      
}

export default RedeemPage;