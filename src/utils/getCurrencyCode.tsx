import {ExchangeCodeKor} from "../enums/ExchangeCodeKor";
import {CurrencyCode} from "../enums/CurrencyCode";

const exchangeToCurrencyMap: { [key in ExchangeCodeKor]: CurrencyCode } = {
    [ExchangeCodeKor.NAS]: CurrencyCode.USD,
    [ExchangeCodeKor.NYS]: CurrencyCode.USD,
    [ExchangeCodeKor.AMS]: CurrencyCode.USD,
    [ExchangeCodeKor.HKS]: CurrencyCode.HKD,
    [ExchangeCodeKor.SHS]: CurrencyCode.CNY,
    [ExchangeCodeKor.SZS]: CurrencyCode.CNY,
    [ExchangeCodeKor.HSX]: CurrencyCode.VND,
    [ExchangeCodeKor.HNX]: CurrencyCode.VND,
    [ExchangeCodeKor.TSE]: CurrencyCode.JPY,
};

// 주어진 거래소 코드에 대한 통화 코드를 반환하는 const 함수
export const getCurrencyCode = (exchangeCode: ExchangeCodeKor): CurrencyCode => {
    return exchangeToCurrencyMap[exchangeCode];
};