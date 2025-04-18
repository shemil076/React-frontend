import { useEffect, useState } from "react";
import { useAlert } from "../context/AlertContext";
import { useRedeemRewards } from "../hooks/useLoyalty";

interface RedeemCardProps {
    userId: string;
}

const RedeemCard : React.FC<RedeemCardProps> = ({userId}) => {
    const [amount, setAmount] = useState<number>(0);const [isAmountValid, setIsAmountValid] = useState(false);
    const [alert, setAlert] = useState({
        showAlert: false,
        message: ""
    });

    const { showAlert } = useAlert();
    const {redeemLoyaltyReward, isLoading, error, finalAmount} = useRedeemRewards();

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
    
        const handleRedeemRewards = () => {
            console.log("pressed");
            if (amount > 0 && isAmountValid) {
                redeemLoyaltyReward(userId, amount);
            } else {
                showAlert("ERROR", "Input invalid");
            }
        };

        return (
            <div className="p-8 sm:p-10 rounded-2xl shadow-2xl bg-white max-w-xl mx-auto grid grid-cols-1 gap-6">
              <div className="text-2xl font-bold text-purple-700">
                Redeem Your Rewards
              </div>
          
              <div className="flex flex-col sm:flex-row sm:items-end space-y-8 sm:space-y-0 sm:space-x-4">
                <div className="flex flex-col space-y-2 w-full sm:w-2/3">
                  <input
                    type="number"
                    min="0"
                    onChange={e => setAmount(Number(e.target.value))}
                    className="border-2 border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter bill amount"
                  />
                  <div className={`text-sm text-center ${alert.showAlert ? "text-red-600" : "text-gray-500"}`}>
                    {alert.showAlert ? alert.message : "Total bill amount"}
                  </div>
                </div>
          
                <div className="w-full sm:w-auto">
                  <button
                    className={`w-full h-full sm:w-auto rounded-lg text-white px-5 py-2 transition duration-200 ${isAmountValid && amount > 0 ? "bg-purple-700 hover:bg-purple-800" : "bg-gray-400 cursor-not-allowed"}`}
                    disabled={!isAmountValid || amount <= 0 || isLoading}
                    onClick={handleRedeemRewards}
                  >
                    {isLoading ? "Processing..." : "Redeem Points"}
                  </button>
                </div>
              </div>
          
              <div className="text-lg font-medium text-gray-700">
                Final Amount: <span className={`font-semibold  ${finalAmount? "text-green-700" : "text-black"}`}>{isLoading ? "Processing..." : finalAmount}</span>
              </div>
            </div>
          );
          
}

export default RedeemCard;