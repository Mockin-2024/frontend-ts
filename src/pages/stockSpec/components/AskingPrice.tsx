import React from "react";
import AskingPriceItem from "../../../components/item/AskingPriceItem";
import {AskingPriceInfo} from "../type/AskingPriceInfo";

interface Props {
    askingPriceInfo: AskingPriceInfo
    curr: string;
}

const AskingPrice:React.FC<Props> = ({askingPriceInfo, curr}) => {

    return (
        <div>
            {Array.from({ length: 10 }, (_, index) => {
                const i = index + 1; // 1부터 10까지의 인덱스
                return (
                    <AskingPriceItem
                        key={i}
                        sellPrice={askingPriceInfo[`pask${i}` as keyof AskingPriceInfo]}
                        buyVolume={askingPriceInfo[`vbid${i}` as keyof AskingPriceInfo]}
                        sellVolume={askingPriceInfo[`vask${i}` as keyof AskingPriceInfo]}
                        sellChange={askingPriceInfo[`dask${i}` as keyof AskingPriceInfo]}
                        curr={curr}
                    />
                );
            })}
        </div>
    )
}

export default AskingPrice;