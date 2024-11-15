import React from 'react'

interface Props {
    stockName: string;
    stockHolding: string | null;
    price: string;
    returnRate: string;
}

const StockItem:React.FC<Props> = ({stockName, stockHolding, price, returnRate}) => {
    return (
        <div className={"flex justify-between items-center text-xl w-full"}>
            <div className={"flex flex-col"}>
                <div>{stockName}</div>
                <div>{stockHolding ?`${stockHolding}주` : null}</div>
            </div>
            <div className={"flex flex-col items-end"}>
                <div>{price}원</div>
                <div>{returnRate}%</div>
            </div>
        </div>
    )
}

export default StockItem