import { getFormattedDate } from "../lib/utils/helperFunctions";
import { Transaction } from "../types/transaction";

interface TransactionCardProps {
    transaction : Transaction
}

const getPoints = (title: string, points: number): number | null => {
    switch (title) {
        case "ACCUMULATE_POINTS":
            return points;

        case "CREATE_REWARD":
            return points;

        case "REDEEM_REWARD":
            return null;

        case "DELETE_REWARD":
            return points;

        case "ADJUST_POINTS":
            return null;

        case "EXPIRE_POINTS":
            return points;

        case "OTHER":
            return points;

        case "ACCUMULATE_PROMOTION_POINTS":
            return points;

        default:
            return null;
    }
};

const getReadableTitle = (title: string): string => {
    switch (title) {
        case "ACCUMULATE_POINTS":
            return "Points Earned";

        case "CREATE_REWARD":
            return "Reward Created";

        case "REDEEM_REWARD":
            return "Reward Redeemed";

        case "DELETE_REWARD":
            return "Reward Deleted";

        case "ADJUST_POINTS":
            return "Points Adjusted";

        case "EXPIRE_POINTS":
            return "Points Expired";

        case "OTHER":
            return "Other Activity";

        case "ACCUMULATE_PROMOTION_POINTS":
            return "Promotional Points Earned";

        default:
            return "Unknown Activity";
    }
};


const TransactionCard: React.FC<TransactionCardProps> = ({transaction}) => {

    const points = getPoints(transaction.title, transaction.points)
    return (
        <div className="w-full mx-auto my-6 px-4">
          <div className="grid grid-cols-1 bg-white shadow-md rounded-xl p-6 border border-purple-100 transition duration-300 hover:shadow-xl">
            <div className="flex flex-row-reverse text-sm text-gray-400 mb-2">
              {getFormattedDate(transaction.date)}
            </div>
      
            <div className="text-xl sm:text-2xl font-semibold text-purple-700 underline mb-2">
              {getReadableTitle(transaction.title)}
            </div>
      
            <div className="text-base sm:text-lg text-gray-700 mb-2">
              {transaction.description}
            </div>
      
            {points ? (
              <div className="text-base sm:text-lg text-green-600 font-medium">
                Points: {points}
              </div>
            ) : null}
          </div>
        </div>
      );
      
      

}

export default TransactionCard;