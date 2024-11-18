import {ExchangeCode} from "../enums/ExchangeCode";
import {StockType} from "../enums/StockType";

export
const getStockType = (exchangeCode: ExchangeCode): StockType =>{
    switch (exchangeCode) {
        case ExchangeCode.NASDAQ:
            return StockType.NASDAQ;
        case ExchangeCode.NYSE:
            return StockType.NYSE;
        case ExchangeCode.AMEX:
            return StockType.AMEX;
        case ExchangeCode.SEHK:
            return StockType.HONG_KONG;
        case ExchangeCode.SHAA:
            return StockType.SHANGHAI_A;
        case ExchangeCode.SZAA:
            return StockType.SHENZHEN_A;
        case ExchangeCode.TKSE:
            return StockType.JAPAN;
        case ExchangeCode.HASE:
            return StockType.VIETNAM_HANOI;
        case ExchangeCode.VNSE:
            return StockType.VIETNAM_HO_CHI_MINH;
        default:
            throw new Error("Unknown exchange code");
    }
}