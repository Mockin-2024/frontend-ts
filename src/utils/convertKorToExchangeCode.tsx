
import {ExchangeCodeShort} from "../enums/ExchangeCodeShort";
import {ExchangeCodeKor} from "../enums/ExchangeCodeKor";

export const convertStockTypeToExchangeCode = (kor: ExchangeCodeKor) => {
    switch (kor) {
        case ExchangeCodeKor.NAS:
            return ExchangeCodeShort.NAS;
        case ExchangeCodeKor.NYS:
            return ExchangeCodeShort.NYS;
        case ExchangeCodeKor.AMS:
            return ExchangeCodeShort.AMS;
        case ExchangeCodeKor.TSE:
            return ExchangeCodeShort.TSE;
        case ExchangeCodeKor.HKS:
            return ExchangeCodeShort.HKS;
        case ExchangeCodeKor.HNX:
            return ExchangeCodeShort.HNX;
        case ExchangeCodeKor.HSX:
            return ExchangeCodeShort.HSX;
        case ExchangeCodeKor.SHS:
            return ExchangeCodeShort.SHS;
        case ExchangeCodeKor.SZS:
            return ExchangeCodeShort.SZS;
        default:
            return undefined;
    }
}