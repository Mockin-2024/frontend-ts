import {StockType} from "../enums/StockType";
import {ExchangeCodeShort} from "../enums/ExchangeCodeShort";

export const convertStockTypeToExchangeCode = (stockType: StockType) => {
    switch (stockType) {
        case StockType.NASDAQ:
            return ExchangeCodeShort.NAS;
        case StockType.NYSE:
            return ExchangeCodeShort.NYS;
        case StockType.AMEX:
            return ExchangeCodeShort.AMS;
        case StockType.JAPAN:
            return ExchangeCodeShort.TSE;
        case StockType.HONG_KONG:
            return ExchangeCodeShort.HKS;
        case StockType.VIETNAM_HANOI:
            return ExchangeCodeShort.HNX;
        case StockType.VIETNAM_HO_CHI_MINH:
            return ExchangeCodeShort.HSX;
        case StockType.SHANGHAI_A:
            return ExchangeCodeShort.SHS;
        case StockType.SHENZHEN_A:
            return ExchangeCodeShort.SZS;
        default:
            return undefined;
    }
}