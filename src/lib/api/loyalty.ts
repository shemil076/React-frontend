import axios from "axios";
import { BalanceType } from "../../types/balance";
import { error } from "console";


export const fetchBalance = (id: string) : Promise<BalanceType> => {
    return axios.get("http://localhost:8080/api/balance", {
        params: { id }
      }).then(res => {
        console.log("balance",res.data.balance)
        return res.data.balance
      })
}

export const earnPoints = (id : string, amount: number) : Promise<number> => {
  console.log("Running, ", id, amount)
  const amountInCents = amount * 100
  return axios.post("http://localhost:8080/api/earn",{
    id,
    amountInCents
  }).then((res) => {
    console.log("balance",res.data.points)
    console.log("points", res.data.points)
    return res.data.points
  }).catch((error) =>{
    throw error;
  })
}

// var loyaltyInputs struct {
//   ID string `json:"id" binding:"required"`
//   AmountInCents int64 `json:"AmountInCents" binding:"required"`
// }