import useNavigator from "./useNavigator";

import {ExchangeCode} from "../enums/ExchangeCode";
import {AppRoutes} from "../enums/AppRoutes";
import {getStockType} from "../utils/getStockType";

const useStockSpec = () => {
    const {navigateTo} = useNavigator()

    const toStockSpec = (exchangeCode: ExchangeCode, stockId:string) => {
        const stockType = getStockType(exchangeCode)
        navigateTo(AppRoutes.STOCK, {
            stockType: stockType,
            stockId: stockId,
        })
    }

    return {toStockSpec}
}

export default useStockSpec