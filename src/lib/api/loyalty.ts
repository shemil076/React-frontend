import axios from "axios";
import { BalanceType } from "../../types/balance";
import { error } from "console";
import { formatTransactions } from "../utils/loyalty";
import { Transaction } from "../../types/transaction";


export const fetchBalance = async (id: string) : Promise<any> => {
    return axios.get("http://localhost:8080/api/balance", {
        params: { id }
      }).then(res => {
        console.log("balance",res.data.balance)
        return res.data.balance
      })
      .catch((error) =>{
        throw error;
      })
}

export const earnPoints = async (id : string, amount: number) : Promise<number> => {
  console.log("Running, ", id, amount)
  const amountInCents = amount * 100
  return axios.post("http://localhost:8080/api/earn",{
    id,
    amountInCents
  }).then((res) => {
    return res.data.points
  }).catch((error) =>{
    throw error;
  })
}

export const redeemRewards = async (id: string, amount: number) :Promise<number> => {
  const amountInCents = amount * 100
  return axios.post("http://localhost:8080/api/redeem",{
    id,
    amountInCents
  }).then((res) => {
    return res.data.finalAmount
  }).catch((error) =>{
    throw error;
  })
}

export const getHistory = async(id: string) : Promise<Transaction[]> => {
  return axios.get("http://localhost:8080/api/history", {
    params: { id }
  }).then(res => {
    console.log("transactions",res.data.transactions)
    return res.data.transactions.map((item: any) => formatTransactions(item))
  })
  .catch((error) =>{
    throw error;
  })
} 

  