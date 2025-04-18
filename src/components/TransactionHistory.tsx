import { useHistory } from "../hooks/useLoyalty";
import TransactionCard from "./TransactionCard";

interface TransactionHistoryProps {
    userId : string;
}

const TransactionHistory : React.FC<TransactionHistoryProps> = ({userId}) => {

    const { transactions, loading, error } =  useHistory(userId)

    if(!transactions){
        <p>No history</p>
    }
    if(loading){
        <p>Loading ...</p>
    }

    if(error){
        <p>Something went wrong..</p>
    }

    console.log("transactions =>",transactions)
    return(
        <div className="mx-10">
           {
            transactions?.map((item) => (
                <TransactionCard transaction={item} />
            ))
           }

        </div>
    );
}

export default TransactionHistory;