import EarnCard from "../components/EarnCard";
import { useAuth } from "../context/AuthContext";

const EarnPage: React.FC = () => {
    const { user } = useAuth();

    if (!user) {
        return <>No user</>;
    }
    return (
  <div className="w-full h-[calc(100vh-99px)] bg-gradient-to-r from-blue-100 to-teal-200 overflow-hidden">
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="w-full sm:w-3/4">
        <EarnCard userId={user?.id} />
      </div>
    </div>
  </div>
);

}

export default EarnPage;