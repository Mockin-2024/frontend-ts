import {ExchangeCode} from "../enums/ExchangeCode";

export const toExchangeCode = (excd: string):ExchangeCode => {
    switch (excd) {
        case "NAS" || "NASD":
            return ExchangeCode.NASDAQ
        case "NYS" || "NYSE":
            return ExchangeCode.NYSE
        case "AMS" || "AMEX":
            return ExchangeCode.AMEX
        case "HKS" || "SEHK":
            return ExchangeCode.SEHK
        case "SHS" || "SHAA":
            return ExchangeCode.SHAA
        case "SZS" || "SZAA":
            return ExchangeCode.SZAA
        case "TSE" || "TKSE":
            return ExchangeCode.TKSE
        case "HNX" || "HASE":
            return ExchangeCode.HASE
        case "HSX" || "VNSE":
            return ExchangeCode.VNSE
        default:
            throw Error("Unknown exchange code");
    }
}