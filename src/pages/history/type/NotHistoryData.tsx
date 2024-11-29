export interface NotHistoryData{
    // 주문일자
    ord_dt: string;
    // 상품명
    prdt_name: string;
    // 거부사유
    rjct_rson: string;
    // 매도매수구분코드
    sll_buy_dvsn_cd:string;
    // 미체결수량
    nccs_qty: string;
    // 주문단가
    ft_ord_unpr3: string;
    // 거래통화코드
    tr_crcy_cd: string;
}