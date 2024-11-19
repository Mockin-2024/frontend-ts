import {ExchangeCode} from "../enums/ExchangeCode";

export const toExchangeCode = (excd: string):ExchangeCode => {
    switch (excd) {
        case "NAS":
        case "NASD":
            return ExchangeCode.NASDAQ;
        case "NYS":
        case "NYSE":
            return ExchangeCode.NYSE;
        case "AMS":
        case "AMEX":
            return ExchangeCode.AMEX;
        case "HKS":
        case "SEHK":
            return ExchangeCode.SEHK;
        case "SHS":
        case "SHAA":
            return ExchangeCode.SHAA;
        case "SZS":
        case "SZAA":
            return ExchangeCode.SZAA;
        case "TSE":
        case "TKSE":
            return ExchangeCode.TKSE;
        case "HNX":
        case "HASE":
            return ExchangeCode.HASE;
        case "HSX":
        case "VNSE":
            return ExchangeCode.VNSE;
        default:
            throw Error("Unknown exchange code");
    }
}