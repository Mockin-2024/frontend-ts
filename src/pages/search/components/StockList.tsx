import React from "react";
import useRestAPI from "../../../hooks/useRestAPI";
import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {SearchDto} from "../dto/SearchDto";
import StockItem from "../../../components/item/StockItem";

interface Stock {
    name: string;
    rate: string;
}

interface Props {
    stockName: string;
}

const StockList:React.FC<Props> = ({stockName}) => {
    const {data, loading, error} = useRestAPI(Endpoint.GET_SEARCH, Http.GET, SearchDto)

    const filteredStocks = data?.output2.filter((stock: Stock) =>
        stock.name.toLowerCase().includes(stockName.toLowerCase())
    );

    return(
        <div>
            {data? (
                filteredStocks.slice(0, 5).map((stock: Stock) => (
                    <StockItem
                        key={stock.name}
                        stockName={stock.name}
                        stockHolding={""}
                        price={""}
                        returnRate={stock.rate}
                    />
                ))
            ) : (
                <div>검색 가능한 주식이 없습니다.</div>
            )}
        </div>
    )
}

export default StockList