import React from "react";
import {PriceInfo} from "../type/PriceInfo";

interface Props{
    priceInfo: PriceInfo;
}
const StockDetailInfo: React.FC<Props> = ({priceInfo}) => {
    return (
        <div>
            <div>
                시세
            </div>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col w-full pr-2 border-r border-r-gray-300"}>
                    <div className={"flex flex-row justify-between"}>
                        <div>시작가</div>
                        <div>{priceInfo.open}{priceInfo.curr}</div>
                    </div>
                    <div className={"flex flex-row justify-between"}>
                        <div>종가</div>
                        <div>{priceInfo.last}{priceInfo.curr}</div>
                    </div>
                </div>
                <div className={"flex flex-col w-full pl-2"}>
                    <div className={"flex flex-row justify-between"}>
                        <div>거래량</div>
                        <div>{priceInfo.tvol}주</div>
                    </div>
                    <div className={"flex flex-row justify-between"}>
                        <div>거래대금</div>
                        <div>{priceInfo.tamt}{priceInfo.curr}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockDetailInfo;