

import { useEffect, useState } from "react"
import { BalanceType } from "../types/balance"
import { useAuth } from "../context/AuthContext";
import { fetchBalance } from "../lib/api/loyalty";

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