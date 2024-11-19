import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import Alert from "./Alert";
import {AlertIcon} from "../../enums/AlertIcon";


interface Props{
    loading: boolean;
    error: string | null;
}

const LoadingOrError:React.FC<Props> = ({ loading, error}) => {
    const navigateTo = useNavigate()

    useEffect(() => {
        if (error) {
            const showErrorAlert = async () => {
                await Alert("불러오기 실패", error, AlertIcon.ERROR);
                navigateTo(-1)
            };
            showErrorAlert();
        }
    }, [error]); // error가 변경될 때마다 실행

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="loader"></div>
            </div>)
    }
    return null;
};

export default LoadingOrError;