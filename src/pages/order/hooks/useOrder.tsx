import apiRequest from "../../../utils/apiRequest";
import Alert from "../../../components/common/Alert";

import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {AlertIcon} from "../../../enums/AlertIcon";
import {ExchangeCode} from "../../../enums/ExchangeCode";
import {OrderType} from "../../../enums/OrderType";

import {toOrderTransactionId} from "../../../utils/toOrderTransactionId";
import {useCurrency} from "../../../context/CurrencyContext";
import useNavigator from "../../../hooks/useNavigator";
import {useNavigate} from "react-router-dom";

export interface OrderHandler {
    (orderType: OrderType, quantity: string, price: string): Promise<void>;
}

const useOrder = (exchangeCode: ExchangeCode, stockId: string, curr: string) => {
    const {convertFromKRW} = useCurrency()
    const navigateTo = useNavigate()
    const orderHandler: OrderHandler = async (
        orderType: OrderType,
        quantity: string,
        price: string
        ) => {
        const {data, error} = await apiRequest(Endpoint.POST_ORDER, Http.POST, {
            transactionId: toOrderTransactionId(exchangeCode, orderType),
            overseasExchangeCode: exchangeCode,
            productNumber: stockId,
            orderQuantity: quantity,
            overseasOrderUnitPrice:convertFromKRW(Number(price), curr).toString()
        }, true)

        if (error){
            await Alert(`${orderType} 실패`, error.toString(), AlertIcon.ERROR)
            return;
        }
        await Alert(`${orderType} 성공`, ` `, AlertIcon.SUCCESS)
        navigateTo(-1)
    }
    return {orderHandler}
}

export default useOrder