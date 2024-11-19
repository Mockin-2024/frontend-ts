import React from 'react'
import {PriceInfo} from "../type/PriceInfo";
import {formatNumber} from "../../../utils/formatNumber";

interface Props{
    name:string;
    priceInfo: PriceInfo;
    type:string;
}

const StockInfo: React.FC<Props> = ({name, priceInfo, type}) => {
    return(
        <div className={"flex flex-col"}>
            <div className={"flex flex-row"}>
                <div className={"text-xl"}>
                    {name}
                </div>
                <div className={"text-xs"}>
                    {type}
                </div>
            </div>
            <div className={"text-4xl"}>
                {formatNumber(Number(priceInfo.t_xprc))}원
            </div>
        </div>
    )
}

export default StockInfo;