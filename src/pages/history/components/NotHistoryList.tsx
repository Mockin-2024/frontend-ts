import React from "react";

import HistoryItem from "../../../components/item/HistoryItem";

import {NotHistoryData} from "../type/NotHistoryData";

interface Props {
    history: NotHistoryData[];
}

const NotHistoryList: React.FC<Props> = ({history}) => {
    return (
        <div className={"p-4"}>
            <div>
                미체결된 주문
            </div>
            <div className={""}>
                {history.length > 0 ? (
                    history.map((historyData) => (
                        <HistoryItem
                            date={historyData.ord_dt}
                            stockName={historyData.prdt_name}
                            quantity={historyData.nccs_qty}
                            orderType={historyData.sll_buy_dvsn_cd === "01" ? "매수": "매도"}
                            price={historyData.ft_ord_unpr3}
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

export default NotHistoryList;