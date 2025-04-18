import axios from "axios";
import { BalanceType } from "../../types/balance";
import { useAuth } from "../../context/AuthContext";


export const fetchBalance = (id: string) : Promise<BalanceType> => {
    return axios.get("http://localhost:8080/api/balance", {
        params: { id }
      }).then(res => {
        console.log("balance",res.data.balance)
        return res.data.balance
      })
}