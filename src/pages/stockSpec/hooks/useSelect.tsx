import {useState} from "react";
import useNavigator from "../../../hooks/useNavigator";
import {AppRoutes} from "../../../enums/AppRoutes";

const useSelect = (stockId:string) => {
    const [option, setOption] = useState<string | null>(null);
    const {navigateTo} = useNavigator()

    const handleOptionSelect = (option: string) => {
        setOption(option);
    };

    const handleOrderSelect = (orderType: string) => {
        navigateTo(AppRoutes.ORDER, {
            orderType: orderType,
            stockId: stockId,
            price: "100000"
        })
    }

    return {option, handleOptionSelect, handleOrderSelect}
}

export default useSelect;
