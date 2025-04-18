
import { createContext, useState } from "react";
import { AlertType } from "../types/alert";
import { isVisible } from "@testing-library/user-event/dist/utils";
import AlertBanner from "../components/Alert";

interface AlertContextType {
    showAlert : (type: AlertType, message: string) => void;
    hideAlert:()=> void
}

const ALertContext = createContext<AlertContextType | undefined>(undefined);

const AlertProvider : React.FC<React.PropsWithChildren> = ({children}) => {
    const [alert, setAlert] = useState({
        isVisible : false,
        message: "",
        type: "SUCCESS" as AlertType
    });


    const showAlert = (type : AlertType, message: string) => {
        setAlert({isVisible: true, message, type})
    } 

    const hideAlert = () => {
        setAlert({isVisible: false, message: "", type:"SUCCESS"});
    }
    return(
        <ALertContext.Provider value={{showAlert, hideAlert}}>
            <>
            <AlertBanner 
                message={alert.message}
                type={alert.type}
                isVisible={alert.isVisible}
                onClose={hideAlert}/>
                {children}
            </>
        </ALertContext.Provider>
    )
}

export default AlertProvider;