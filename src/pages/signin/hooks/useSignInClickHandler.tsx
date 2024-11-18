import apiRequest from "../../../utils/apiRequest";
import useNavigator from "../../../hooks/useNavigator";
import Alert from "../../../components/common/Alert";

import {AlertIcon} from "../../../enums/AlertIcon";
import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {AppRoutes} from "../../../enums/AppRoutes";

const useSignInClickHandler = (email:string, password:string) => {
    const {navigateTo} = useNavigator()

    const handleClick =  async () => {
        const {data, error } = await apiRequest(Endpoint.POST_SIGN_IN, Http.POST , {
            email: email,
            password: password,
        })

        if (error){
            await Alert("로그인 실패", "아이디 또는 패스워드가 틀렸습니다.", AlertIcon.ERROR)
            return;
        }

        localStorage.setItem('accessToken', data.token);
        localStorage.setItem('email', email);
        navigateTo(AppRoutes.MAIN, {})
    }
    return {handleClick}
};

export default useSignInClickHandler;