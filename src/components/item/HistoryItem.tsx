import React from "react";
import {formatNumber} from "../../utils/formatNumber";

interface Props {
    date: string;
    stockName: string;
    quantity: string;
    orderType: string;
    price: string;
}

const HistoryItem:React.FC<Props> = ({date, stockName, quantity, orderType, price}) => {
    return (
        <div className={"flex flex-row justify-between pt-4 pb-4"}>
            <div className={"w-1/6"}>
                {date}
            </div>
            <div className={"w-full pl-4"}>
                <div>
                    {stockName}
                </div>
                <div className={"text-xs"}>
                    {quantity}주 {orderType} 완료
                </div>
            </div>
            <div className={"whitespace-nowrap"}>
                주당 {formatNumber(Number(price))}원
            </div>
        </div>
    )
}

export default HistoryItem;