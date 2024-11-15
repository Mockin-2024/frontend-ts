import React from "react";

const StockDetailInfo: React.FC = () => {
    return (
        <div>
            <div>
                시세
            </div>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col w-full pr-2 border-r border-r-gray-300"}>
                    <div className={"flex flex-row justify-between"}>
                        <div>시작가</div>
                        <div>100000원</div>
                    </div>
                    <div className={"flex flex-row justify-between"}>
                        <div>종가</div>
                        <div>100000원</div>
                    </div>
                </div>
                <div className={"flex flex-col w-full pl-2"}>
                    <div className={"flex flex-row justify-between"}>
                        <div>거래량</div>
                        <div>11주</div>
                    </div>
                    <div className={"flex flex-row justify-between"}>
                        <div>거래대금</div>
                        <div>10000000원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockDetailInfo;