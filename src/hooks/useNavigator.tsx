import { useNavigate } from 'react-router-dom';

const useNavigator = () => {
    const navigate = useNavigate();

    const navigateTo = (uri: string, state: Record<string, any> = {}) => {
        navigate(uri, {
            state: state
        });
    };

    return { navigateTo };
};

export default useNavigator;
