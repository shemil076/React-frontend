import { User } from "../../types/user";

export const formatUser = (data: any) :User => {
    const formattedUser : User ={
        id: data.id,
        phoneNumber: data.phoneNumber,
        loyaltyId: data.loyaltyId,
        firstName: data.firstName,
        lastName: data.lastName
    } 
    
    return formattedUser;
}
