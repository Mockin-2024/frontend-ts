import { useNavigate } from 'react-router-dom';

const useStockSpecNavigator = () => {
    const navigate = useNavigate();

    const navigateStockSpec = (stockId: string, stockType: string) => {
        navigate("/stock", {
            state: {
                stockType: stockType,
                stockId: stockId,
            }
        });
    }

    return {navigateStockSpec}
}

export default useStockSpecNavigator;