import React from 'react'

import StockSpecTopNavBar from "./components/StockSpecTopNavBar";
import StockInfo from "./components/StockInfo";
import AskingPrice from "./components/AskingPrice";
import StockDetailInfo from "./components/StockDetailInfo";
import StockSpecBottomNavBar from "./components/StockSpecBottomNavBar";

import {useLocation} from "react-router-dom";
import useSelect from "./hooks/useSelect";
import useSearchInfo from "./hooks/useSearchInfo";
import LoadingOrError from "../../components/common/LoadingOrError";
import usePrice from "./hooks/usePrice";

const StockSpecPage: React.FC = () => {
    const { stockType, stockId } = useLocation().state || {};
    const { option, handleOptionSelect, handleOrderSelect } = useSelect(stockId)
    const { searchInfo, loading: loadingSearchInfo, error: errorSearchInfo } = useSearchInfo(stockType, stockId)
    const { priceInfo, loading: loadingPrice, error: errorPrice } = usePrice(stockType, stockId)

    const isLoading = loadingSearchInfo || loadingPrice;
    const isError = errorSearchInfo || errorPrice;

    return (
        <div className={""}>
            <LoadingOrError loading={isLoading} error={isError} />
            <StockSpecTopNavBar/>

            <div className={"pt-20 p-4"}>
                {!isLoading && !isError && searchInfo && (
                    <>
                        <StockInfo
                            name={searchInfo.prdt_name}
                            price={priceInfo.last}
                            type={searchInfo.ovrs_excg_name}
                            currency={priceInfo.curr}
                        />
                        <div className={"flex p-4 justify-between "}>
                            <div onClick={() => handleOptionSelect('chart')}>차트</div>
                            <div onClick={() => handleOptionSelect('askingPrice')}>호가</div>
                            <div onClick={() => handleOptionSelect('detailInfo')}>종목 정보</div>
                        </div>

                        <div className={"p-4"}>
                            {option === 'askingPrice' && <AskingPrice stockId={stockId} stockType={stockType} />}
                            {option === 'detailInfo' && <StockDetailInfo/>}
                        </div>
                    </>
                )}
            </div>

            <StockSpecBottomNavBar handleOrderSelect={handleOrderSelect}/>
        </div>

    )
}

export default StockSpecPage