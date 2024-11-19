import React from "react";
import {PriceInfo} from "../type/PriceInfo";
import {useCurrency} from "../../../context/CurrencyContext";
import {formatNumber} from "../../../utils/formatNumber";
import {formatCurrency} from "../../../utils/formatCurrency";

interface Props{
    priceInfo: PriceInfo;
}
const StockDetailInfo: React.FC<Props> = ({priceInfo}) => {
    const {convertToKRW} = useCurrency()
    return (
        <div>
            <div>
                시세
            </div>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col w-full pr-2 border-r border-r-gray-300"}>
                    <div className={"flex flex-row justify-between"}>
                        <div>시작가</div>
                        <div>{formatNumber(convertToKRW(Number(priceInfo.open), priceInfo.curr))}원</div>
                    </div>
                    <div className={"flex flex-row justify-between"}>
                        <div>종가</div>
                        <div>{formatNumber(convertToKRW(Number(priceInfo.last), priceInfo.curr))}원</div>
                    </div>
                </div>
                <div className={"flex flex-col w-full pl-2"}>
                    <div className={"flex flex-row justify-between"}>
                        <div>거래량</div>
                        <div>{formatCurrency(Number(priceInfo.tvol))}주</div>
                    </div>
                    <div className={"flex flex-row justify-between"}>
                        <div>거래대금</div>
                        <div>{formatCurrency(convertToKRW(Number(priceInfo.tamt), priceInfo.curr))}원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockDetailInfo;