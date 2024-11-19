import React from 'react'

import StockSpecTopNavBar from "./components/StockSpecTopNavBar";
import StockInfo from "./components/StockInfo";
import AskingPrice from "./components/AskingPrice";
import StockDetailInfo from "./components/StockDetailInfo";
import StockSpecBottomNavBar from "./components/StockSpecBottomNavBar";

import {useLocation} from "react-router-dom";
import useSelect from "./hooks/useSelect";
import useSearchInfo from "./hooks/useSearchInfo";

const StockSpecPage: React.FC = () => {
    const {stockType, stockId} = useLocation().state || {};
    const {option, handleOptionSelect, handleOrderSelect} = useSelect(stockId)
    const {searchInfo} = useSearchInfo(stockType, stockId)

    return (
        <div className={""}>
            <StockSpecTopNavBar/>

            <div className={"pt-20 p-4"}>
                <StockInfo name={searchInfo.prdt_name} price={"100000"} type={searchInfo.ovrs_excg_name}/>
                <div className={"flex p-4 justify-between "}>
                    <div onClick={() => handleOptionSelect('chart')}>차트</div>
                    <div onClick={() => handleOptionSelect('askingPrice')}>호가</div>
                    <div onClick={() => handleOptionSelect('detailInfo')}>종목 정보</div>
                </div>

                <div className={"p-4"}>
                    {/*{selected === 'chart' && </>}*/}
                    {option === 'askingPrice' && <AskingPrice stockId={stockId} stockType={stockType} />}
                    {option === 'detailInfo' && <StockDetailInfo/>}
                </div>

                {/*<div className={"flex p-4 w-full"}>*/}
                {/*    <StockChart data={stockData}/>*/}
                {/*</div>*/}
            </div>

            <StockSpecBottomNavBar handleOrderSelect={handleOrderSelect}/>
        </div>

    )
}

export default StockSpecPage