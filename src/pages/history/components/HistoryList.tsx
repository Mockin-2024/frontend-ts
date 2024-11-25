import React from "react";
import HistoryItem from "../../../components/item/HistoryItem";
import {HistoryData} from "../type/HistoryData";

interface Props {
    history: HistoryData[];
}

const HistoryList: React.FC<Props> = ({history}) => {
    return (
        <div className={"p-4"}>
            <div>
                완료된 주문
            </div>
            <div className={""}>
                {history.length > 0 ? (
                    history.map((historyData) => (
                        <HistoryItem
                            date={historyData.ord_dt}
                            stockName={historyData.prdt_name}
                            quantity={historyData.ft_ccld_qty}
                            orderType={historyData.sll_buy_dvsn_cd === "01" ? "매수": "매도"}
                            price={historyData.ft_ccld_unpr3}
                        />
                    ))
                ): (
                    <div>
                        주문 내역이 없습니다.
                    </div>
                )}
            </div>
        </div>
    )
}

export default HistoryList;