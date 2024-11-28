import {ExchangeCode} from "../../../enums/ExchangeCode";

export interface Favorite {
    // 거래소코드
    excd: ExchangeCode;
    // 상품번호
    symb: string;
}