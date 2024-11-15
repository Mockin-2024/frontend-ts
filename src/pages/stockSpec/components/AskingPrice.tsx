import React from "react";
import AskingPriceItem from "../../../components/item/AskingPriceItem";

interface Props {
    stockType: string;
    stockId: string;
}

const AskingPrice:React.FC<Props> = ({stockType, stockId}) => {
    return (
        <div>
            <AskingPriceItem sellPrice={"100000"} buyVolume={"1"} sellVolume={"1"} sellChange={"1.5"}/>
        </div>
    )
}

export default AskingPrice;