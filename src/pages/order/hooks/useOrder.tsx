import apiRequest from "../../../utils/apiRequest";
import Alert from "../../../components/common/Alert";

import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {AlertIcon} from "../../../enums/AlertIcon";
import {ExchangeCode} from "../../../enums/ExchangeCode";
import {OrderType} from "../../../enums/OrderType";

import {toOrderTransactionId} from "../../../utils/toOrderTransactionId";
import {useCurrency} from "../../../context/CurrencyContext";

export interface OrderHandler {
    (orderType: OrderType, quantity: string, price: string): Promise<void>;
}

const useOrder = (exchangeCode: ExchangeCode, stockId: string,) => {
    const {convertFromKRW} = useCurrency()
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
            overseasOrderUnitPrice:price
        }, true)

        if (error){
            await Alert(`${orderType} 실패`, error.toString(), AlertIcon.ERROR)
            return;
        }
        await Alert(`${orderType} 성공`, ` `, AlertIcon.ERROR)
    }
    return {orderHandler}
}

export default useOrder