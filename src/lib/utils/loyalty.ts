import { Transaction } from "../../types/transaction";

export const formatTransactions = (data : any) :Transaction => {
    const formattedTransaction : Transaction = {
        date: new Date(data.date),
        description: data.description,
        points: data.points,
        title: data.title
    }

    return formattedTransaction;
}



// export const formatUser = (data: any) :User => {
//     const formattedUser : User ={
//         id: data.id,
//         phoneNumber: data.phoneNumber,
//         loyaltyId: data.loyaltyId,
//         firstName: data.firstName,
//         lastName: data.lastName
//     } 
    
//     return formattedUser;
// }
