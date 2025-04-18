import { useEffect, useState } from "react";
import { useBalance, useEarnPoints } from "../hooks/useLoyalty";
import { useAlert } from "../context/AlertContext";
import { useNavigate } from "react-router-dom";

interface EarnCardProps {
    userId: string;
}

const EarnCard: React.FC<EarnCardProps> = ({ userId }) => {
    const [amount, setAmount] = useState<number>(0);
    const [isAmountValid, setIsAmountValid] = useState(false);
    const [alert, setAlert] = useState({
        showAlert: false,
        message: ""
    });


    const { showAlert } = useAlert();
    const { earnLoyaltyPoints, isLoading } = useEarnPoints();

    useEffect(() => {
        if (amount < 0) {
            setAlert({
                showAlert: true,
                message: "Amount cannot be minus"
            });
            setIsAmountValid(false);
        } else {
            setAlert({
                showAlert: false,
                message: ""
            });
            setIsAmountValid(true);
        }
    }, [amount]);

    const handleEarnPoints = () => {
        console.log("pressed");
        if (amount > 0 && isAmountValid) {
            earnLoyaltyPoints(userId, amount);
        } else {
            showAlert("ERROR", "Input invalid");
        }
    };

    return (
        <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-8 sm:p-10 rounded-2xl border border-purple-300 shadow-md max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <div className="flex flex-col space-y-6 w-full sm:w-2/3">
              <input
                type="number"
                min="0"
                onChange={e => setAmount(Number(e.target.value))}
                className="border-2 border-purple-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-700"
                placeholder="Enter amount spent"
              />
              <div
                className={`text-sm text-center ${
                  alert.showAlert ? "text-red-600" : "text-gray-700"
                }`}
              >
                {alert.showAlert ? alert.message : "Spending amount"}
              </div>
            </div>
      
            <div className="w-full sm:w-auto justify-items-center">
              <button
                className={`w-full sm:w-auto rounded-lg text-white font-medium px-5 py-2 transition duration-200 ${
                  isAmountValid && amount > 0
                    ? "bg-black hover:bg-gray-800"
                    : "bg-slate-500 cursor-not-allowed"
                }`}
                disabled={!isAmountValid || amount <= 0 || isLoading}
                onClick={handleEarnPoints}
              >
                {isLoading ? "Processing..." : "Earn Points"}
              </button>
            </div>
          </div>
        </div>
      );
      
};

export default EarnCard;
