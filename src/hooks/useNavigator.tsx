import { useNavigate } from 'react-router-dom';
import {AppRoutes} from "../enums/AppRoutes";

const useNavigator = () => {
    const navigate = useNavigate();

    const navigateTo = (uri: AppRoutes, state: Record<string, any> = {}) => {
        navigate(uri, {
            state: state
        });
    };

    return { navigateTo };
};

export default useNavigator;
