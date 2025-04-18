import axios from "axios";
import { useBalance } from "../hooks/useLoyalty";

interface EarnCardProps {
    userId : string
}
const EarnCard: React.FC<EarnCardProps> = ({userId}) => {
    const {balance} = useBalance(userId)
    return(
        <div className="border p-5 rounded">
            <div className="flex flex-row">
                <div>
                    <input type="text"  className="border"/>
                </div>
            </div>
        </div>
    )
}

export default EarnCard;
