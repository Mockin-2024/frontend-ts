export interface HistoryData {
    // 주문일자
    ord_dt: string,
    // 상품명
    prdt_name: string,
    // 처리상태명
    prcs_stat_name: string,
    // 매도매수구분코드
    sll_buy_dvsn_cd: string,
    // 체결수량
    ft_ccld_qty:string,
    // 체결단가
    ft_ccld_unpr3:string,
    // 거래통화코드
    tr_crcy_cd: string,
}