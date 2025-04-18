import { useEffect } from "react";
import { AlertType } from "../types/alert";

interface AlertBannerProps {
    message: string;
    type: AlertType;
    isVisible: boolean;
    onClose: () => void;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ message, type, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    const baseClasses = "w-full fixed top-0 left-0 z-50 px-6 py-4 text-white text-center transition-transform duration-300";
    const slideClass = isVisible ? "translate-y-0" : "-translate-y-full";
    const bgColor = {
        SUCCESS: "bg-green-600",
        WARNING: "bg-yellow-600",
        ERROR: "bg-red-600",
    }[type];

    return (
        <div className={`${baseClasses} ${slideClass} ${bgColor}`}>
            <div className="flex items-center justify-between mx-auto max-w-4xl">
                <span className="text-lg font-semibold">{message}</span>
                <button
                    onClick={onClose}
                    className="ml-4 text-white hover:text-gray-300"
                    aria-label="Close alert"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default AlertBanner;
