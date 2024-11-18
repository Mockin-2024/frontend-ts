import {useEffect} from "react";
import useNavigator from "../../../hooks/useNavigator";

import apiRequest from "../../../utils/apiRequest";

import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {AlertIcon} from "../../../enums/AlertIcon";
import {AppRoutes} from "../../../enums/AppRoutes";

import Alert from "../../../components/common/Alert";


const useAutoSignIn = () => {
    const {navigateTo} = useNavigator()

    useEffect( () =>  {
        const validateToken = async  () =>{
            const token = localStorage.getItem("accessToken");
            const email = localStorage.getItem("email");

            if (!token) return;

            const {data, error} = await apiRequest(Endpoint.POST_VALIDATE_TOKEN,  Http.POST, {
                email: email,
                token: token
            });

            if (error){
                await Alert("로그인 만료", "다시 로그인해주세요.", AlertIcon.ERROR)
                localStorage.removeItem("accessToken");
                return;
            }

            localStorage.setItem('accessToken', data.token);
            navigateTo(AppRoutes.TOKEN, {})
        }
        validateToken()
    }, [])
}

export default useAutoSignIn;