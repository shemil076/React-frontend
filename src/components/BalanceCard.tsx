import { useBalance } from "../hooks/useLoyalty";
import { User } from "../types/user";

interface BalanceCardProp {
    user: User
}

const BalanceCard: React.FC<BalanceCardProp> = ({ user }) => {
    const { balance, loading } = useBalance(user.id)
    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-lg text-white space-y-5 shadow-2xl shadow-black w-full">
            <div className="flex flex-col sm:flex-row sm:space-x-3 text-2xl sm:text-3xl font-bold truncate">
                <span>{user.firstName}</span>
                <span>{user.lastName}</span>
            </div>
    
            <div className="grid grid-cols-1">
                <div className="font-bold text-lg sm:text-xl">
                    Total loyalty points
                </div>
    
                <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4">
                    <div className="text-4xl sm:text-6xl">
                        {loading ? "loading.." : `${balance}`}
                    </div>
                    <div className="text-xl sm:text-2xl pb-1 sm:pb-2">
                        Points
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default BalanceCard;