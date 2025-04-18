import TransactionHistory from "../components/TransactionHistory";
import { useAuth } from "../context/AuthContext";

const HistoryPage: React.FC = () => {
  const { user } = useAuth();
  if (!user) return <p className="text-red-600 text-center mt-10">No user found. Please log in.</p>;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-purple-700 mb-2">Transaction History</h1>
          <p className="text-gray-600">Review all your previous transactions in one place.</p>
        </div>

        <TransactionHistory userId={user.id} />
      </div>
    </div>
  );
};

export default HistoryPage;
