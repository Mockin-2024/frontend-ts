import React from 'react'
import SearchTopNavBar from "./components/SearchTopNavBar";
import StockItem from "../../components/item/StockItem";

const SearchPage: React.FC = () => {
    return (
        <div className={"p-4"}>
            <SearchTopNavBar/>
            <div className="flex pt-20">
                <StockItem stockName={"테슬라"} stockHolding={""} price={""} returnRate={"0.5"}/>
            </div>
        </div>

    )
}

export default SearchPage;