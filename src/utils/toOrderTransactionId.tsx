import {ExchangeCode} from "../enums/ExchangeCode";
import {OrderType} from "../enums/OrderType";
import {StockTrading} from "../enums/StockTrading";

export const toOrderTransactionId = (exchangeCode: ExchangeCode, orderType: OrderType) => {
    switch (exchangeCode) {
        case ExchangeCode.NASDAQ:
            return orderType === OrderType.BUY ? StockTrading.US_Buy : StockTrading.US_Sell;

        case ExchangeCode.NYSE:
            return orderType === OrderType.BUY ? StockTrading.US_Buy : StockTrading.US_Sell;

        case ExchangeCode.AMEX:
            return orderType === OrderType.BUY ? StockTrading.US_Buy : StockTrading.US_Sell;

        case ExchangeCode.SHAA:
            return orderType === OrderType.BUY ? StockTrading.CN_SH_Buy : StockTrading.CN_SH_Sell;

        case ExchangeCode.SZAA:
            return orderType === OrderType.BUY ? StockTrading.CN_SZ_Buy : StockTrading.CN_SZ_Sell;

        case ExchangeCode.TKSE:
            return orderType === OrderType.BUY ? StockTrading.JP_Buy : StockTrading.JP_Sell;

        case ExchangeCode.HASE:
            return orderType === OrderType.BUY ? StockTrading.VN_Buy : StockTrading.VN_Sell;

        case ExchangeCode.VNSE:
            return orderType === OrderType.BUY ? StockTrading.VN_Buy : StockTrading.VN_Sell;

        case ExchangeCode.SEHK:
            return orderType === OrderType.BUY ? StockTrading.HK_Buy : StockTrading.HK_Sell;

        default:
            throw new Error(`Unsupported exchange code: ${exchangeCode}`);
    }
};
