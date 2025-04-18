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
        <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-10 rounded-lg border">
            <div className="flex flex-row space-x-3">
                <div className="flex flex-col space-y-3">
                    <input
                        type="number"
                        min="0"
                        onChange={e => setAmount(Number(e.target.value))}
                        className="border rounded-md px-2 py-1"
                    />
                    <div className={`text-center text-sm ${alert.showAlert ? 'text-red-600' : 'text-black'}`}>
                        {alert.showAlert ? alert.message : "Spending amount"}
                    </div>
                </div>
                <div>
                    <button
                        className={`rounded-lg text-white px-3 py-2 ${isAmountValid && amount > 0 ? "bg-black" : "bg-slate-500"}`}
                        disabled={!isAmountValid || amount <= 0 || isLoading}
                        onClick={handleEarnPoints}
                    >
                        {isLoading ? "Processing..." : "Earn points"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EarnCard;
