import React from "react";
import HistoryItem from "../../../components/item/HistoryItem";

const HistoryList = () => {
    return (
        <div className={"p-4"}>
            <div>
                완료된 주문
            </div>
            <div className={""}>
                <HistoryItem date={"09.18"} stockName={"나스닥"} quantity={"1"} orderType={"구매"} price={"10000"}/>
                <HistoryItem date={"09.18"} stockName={"나스닥"} quantity={"1"} orderType={"구매"} price={"10000"}/>
            </div>
        </div>
    )
}

export default HistoryList;