import {useState} from "react";
import useNavigator from "../../../hooks/useNavigator";
import {AppRoutes} from "../../../enums/AppRoutes";
import {ExchangeCode} from "../../../enums/ExchangeCode";

const useSelect = (stockId:string) => {
    const [option, setOption] = useState<string | null>(null);
    const {navigateTo} = useNavigator()

    const handleOptionSelect = (option: string) => {
        setOption(option);
    };

    const handleOrderSelect = (stockName: string, orderType: string, exchangeCode: ExchangeCode, price: string) => {
        navigateTo(AppRoutes.ORDER, {
            orderType: orderType,
            stockId: stockId,
            price: price,
            exchangeCode: exchangeCode,
            stockName:stockName
        })
    }

    return {option, handleOptionSelect, handleOrderSelect}
}

export default useSelect;
