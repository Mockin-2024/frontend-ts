import React from 'react'
import SearchTopNavBar from "./components/SearchTopNavBar";
import StockList from "./components/StockList";

const SearchPage: React.FC = () => {
    const [stockName, setStockName] = React.useState("");
    return (
        <div className={"p-4"}>
            <SearchTopNavBar setStockName={setStockName} stockName={stockName}/>
            <div className="flex flex-row pt-16">
                <div className={"font-bold"}>급상승 주식</div>

            </div>
            <StockList stockName={stockName}/>
        </div>

    )
}

export default SearchPage;