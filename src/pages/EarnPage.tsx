import EarnCard from "../components/EarnCard";
import { useAuth } from "../context/AuthContext";

const EarnPage: React.FC = () => {
    const { user } = useAuth();

    if (!user) {
        return <>No user</>;
    }
    return (
        <div className="w-full h-[calc(100vh-99px)] overflow-y-hidden">
            <div className="w-full h-full flex items-center justify-center">
                <EarnCard userId={user?.id} />
            </div>
        </div>
    )
}

export default EarnPage;