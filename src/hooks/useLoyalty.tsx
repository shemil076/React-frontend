

import { useEffect, useId, useState } from "react"
import { BalanceType } from "../types/balance"
import { useAuth } from "../context/AuthContext";
import { earnPoints, fetchBalance, getHistory, redeemRewards } from "../lib/api/loyalty";
import { useAlert } from "../context/AlertContext";
import { useNavigate } from "react-router-dom";
import { Transaction } from "../types/transaction";

export const useBalance = (userId: string) => {
    const [balance, setBalance] = useState<BalanceType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        const loadBalance = async () => {
            if (!userId) {
                setError(new Error("No user found"));
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const data = await fetchBalance(userId);
                setBalance(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };
    
        loadBalance();
    }, [userId]);
    

    return { balance, loading, error };
}

export const useEarnPoints = () => {
    const [points, setPoints] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const {showAlert} = useAlert();
    const navigate = useNavigate();

    const earnLoyaltyPoints = async (userId: string, amount: number) => {
        if(!userId || !amount){
            setError(new Error("No user found or invalid amount"));
            setIsLoading(false);
            showAlert("ERROR", "No user found or invalid amount")
            return;
        }
        try{
            setIsLoading(true);
            const data = await earnPoints(userId, amount)
            setPoints(data)
            showAlert("SUCCESS", `You have earned ${data} points`)
            navigate("/home")
        }catch(err) {
            setError(err as Error);
            showAlert("ERROR", "Failed to earn points")
        } finally {
            setIsLoading(false);
        }
    }

    return {earnLoyaltyPoints, isLoading, error}
}

export const useRedeemRewards = () => {
    const [finalAmount, setFinalAmount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const {showAlert} = useAlert();

    const redeemLoyaltyReward = async (userId : string, amount: number) => {
        if(!userId || !amount ){
            setError(new Error("No user found or invalid amount"));
            setIsLoading(false);
            showAlert("ERROR", "No user found or invalid amount")
            return;
        }
        try{
            setIsLoading(true);
            const data = await redeemRewards(userId, amount)
            setFinalAmount(data)
            showAlert("SUCCESS", `Successfully redeemed the rewards.`)
        }catch(err) {
            setError(err as Error);
            showAlert("ERROR", `Failed to redeem rewards, might be due to the low balance.`)
        }
        finally {
            setIsLoading(false);
        }
    }

    return {redeemLoyaltyReward, isLoading, error, finalAmount}

}

export const useHistory = (userId: string) => {
    const [transactions, setTransactions] = useState<Transaction[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        const loadBalance = async () => {
            if (!userId) {
                setError(new Error("No user found"));
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const data = await getHistory(userId);
                console.log("Data ->", data)
                setTransactions(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };
    
        loadBalance();
    }, [userId]);
    

    return { transactions, loading, error };
}