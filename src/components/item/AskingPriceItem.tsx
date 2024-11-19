import React from "react";
import {useCurrency} from "../../context/CurrencyContext";

interface Props {
    sellPrice: string;
    buyVolume: string;
    sellVolume: string;
    sellChange: string;
    curr: string;
}

const AskingPriceItem:React.FC<Props> = ({sellPrice, buyVolume, sellVolume, sellChange, curr}) => {
    const {convertToKRW} = useCurrency()
    return (
        <div className={"flex flex-row justify-between text-xl pb-2"}>
            <div className={"flex text-blue-600 w-full justify-end pr-2"}>
                {sellVolume}
            </div>
            <div className={"flex text-red-600 w-full px-4 border-x border-x-gray-300"}>
                <div className={"pl-4"}>
                    {convertToKRW(Number(sellPrice), curr)}</div>
                <div className={"pl-2 text-xs"}>
                    {sellChange}%
                </div>
            </div>
            <div className={"text-red-600 w-full pl-2"}>
                {buyVolume}
            </div>
        </div>
    )
}

export default AskingPriceItem;