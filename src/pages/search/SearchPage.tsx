import React from 'react'

import SearchTopNavBar from "./components/SearchTopNavBar";
import StockList from "./components/StockList";
import SearchOptionModal from "./components/SearchOptionModal";

import useModal from "../../hooks/useModal";
import useStockList from "./hooks/useStockList";

const SearchPage: React.FC = () => {
    const [stockName, setStockName] = React.useState("");
    const {isOpen, closeModal, openModal} = useModal()
    const {stockList, searchByOption} = useStockList()

    return (
        <div className={"p-4"}>
            <SearchTopNavBar setStockName={setStockName} stockName={stockName}/>
            <div className="flex flex-row pt-16 justify-between">
                <div className={"font-bold"}>급상승 주식</div>
                <div onClick={openModal}>검색 설정</div>
            </div>
            <StockList stockName={stockName} stockList={stockList}/>
            {isOpen && <SearchOptionModal closeModal={closeModal} searchByOption={searchByOption}/>}
            
        </div>
    )
}

export default SearchPage;