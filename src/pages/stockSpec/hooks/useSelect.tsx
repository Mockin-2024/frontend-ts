import {useState} from "react";
import useNavigator from "../../../hooks/useNavigator";
import {AppRoutes} from "../../../enums/AppRoutes";
import {ExchangeCode} from "../../../enums/ExchangeCode";
import {OrderType} from "../../../enums/OrderType";

const useSelect = (stockId:string) => {
    const [option, setOption] = useState<string | null>("chart");
    const {navigateTo} = useNavigator()

    const handleOptionSelect = (option: string) => {
        setOption(option);
    };

    const handleOrderSelect = (
        stockName: string,
        orderType: OrderType,
        exchangeCode: ExchangeCode,
        price: string,
        curr: string) => {
        navigateTo(AppRoutes.ORDER, {
            orderType: orderType,
            stockId: stockId,
            price: price,
            exchangeCode: exchangeCode,
            stockName:stockName,
            curr:curr
        })
    }

    return {option, handleOptionSelect, handleOrderSelect}
}

export default useSelect;
