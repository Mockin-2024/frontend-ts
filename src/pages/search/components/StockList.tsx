import React from "react";

import StockItem from "../../../components/item/StockItem";
import {toExchangeCode} from "../../../utils/toExchangeCode";
import {StockData} from "../type/StockData";

interface Props {
    stockName: string;
    stockList: StockData[]
}

const StockList:React.FC<Props> = ({stockName, stockList}) => {
    const filteredStocks = stockList?.filter((stock) =>
        stock.name.toLowerCase().includes(stockName.toLowerCase())
    ) || [];

    return(
        <div>
            {stockList.length > 0 ? (
                filteredStocks.slice(0, 30).map((stock) => (
                    <StockItem
                        key={stock.name}
                        stockName={stock.name}
                        stockHolding={""}
                        price={""}
                        returnRate={stock.rate}
                        stockId={stock.symb}
                        exchangeCode={toExchangeCode(stock.excd)}/>
                ))
            ) : (
                <div>검색 가능한 주식이 없습니다.</div>
            )}
        </div>
    )
}

export default StockList