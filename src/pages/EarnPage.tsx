import BalanceCard from "../components/BalanceCard";
import EarnCard from "../components/EarnCard";
import { useAuth } from "../context/AuthContext";
import { useBalance } from "../hooks/useLoyalty";

const EarnPage: React.FC = () => {
    const { user } = useAuth();

    if (!user) {
        return <>Empty</>;
    }

    return (
        <div className="w-full h-[calc(100vh-99px)] overflow-y-hidden">
            <div className="flex flex-row-reverse mx-5">
                <button
                    className="w-full sm:w-auto px-10 py-1 rounded-3xl bg-white text-black shadow-md shadow-black"
                    onClick={() => alert('Button clicked!')}
                >
                    Earn points
                </button>
            </div>
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

export default EarnPage;
