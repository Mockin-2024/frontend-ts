import React from 'react'
import {ExchangeCode} from "../../enums/ExchangeCode";
import useStockSpec from "../../hooks/useStockSpec";

interface Props {
    stockName: string;
    stockHolding: string | null;
    price: string;
    returnRate: string;
    exchangeCode: ExchangeCode;
    stockId: string;
}

const StockItem:React.FC<Props> = ({stockName, stockHolding, price, returnRate, exchangeCode, stockId}) => {
    const {toStockSpec} = useStockSpec()
    return (
        <div className={"flex justify-between items-center text-xl w-full"} onClick={() => toStockSpec(exchangeCode, stockId)}>
            <div className={"flex flex-col"}>
                <div>{stockName}</div>
                <div>{stockHolding ?`${stockHolding}주` : null}</div>
            </div>
            <div className={"flex flex-col items-end"}>
                <div>{price ? `${price}원` : null}</div>
                <div className={`${returnRate.startsWith('+') ? 'text-red-500' : 'text-blue-500'}`}>{returnRate}%</div>
            </div>
        </div>
    )
}

export default StockItem