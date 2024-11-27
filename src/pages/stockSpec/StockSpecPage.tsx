import React from 'react'

import {useLocation} from "react-router-dom";
import useSelect from "./hooks/useSelect";
import useSearchInfo from "./hooks/useSearchInfo";
import usePrice from "./hooks/usePrice";
import useAskingPrice from "./hooks/useAskingPrice";
import useTimePrice from "./hooks/useTimePrice";

import StockSpecTopNavBar from "./components/StockSpecTopNavBar";
import StockInfo from "./components/StockInfo";
import AskingPrice from "./components/AskingPrice";
import StockDetailInfo from "./components/StockDetailInfo";
import StockSpecBottomNavBar from "./components/StockSpecBottomNavBar";
import LoadingOrError from "../../components/common/LoadingOrError";
import StockChart from "./components/StockChart";

const StockSpecPage: React.FC = () => {
    const { stockType, stockId } = useLocation().state || {};
    const { option, handleOptionSelect, handleOrderSelect } = useSelect(stockId)

    const { searchInfo, loading: loadingSearchInfo, error: errorSearchInfo } = useSearchInfo(stockType, stockId)
    const { priceInfo, loading: loadingPrice, error: errorPrice } = usePrice(stockType, stockId)
    const { askingPriceInfo, loading: loadingAskingPrice, error: errorAskingPrice} = useAskingPrice(stockType, stockId)
    const { timePriceDataList, loading: loadingTimePrice, error: errorTimePrice} = useTimePrice(stockType, stockId)

    const isLoading = loadingSearchInfo || loadingPrice || loadingAskingPrice || loadingTimePrice;
    const isError = errorSearchInfo || errorPrice || errorAskingPrice || errorTimePrice;
    const isValid = !isLoading && !isError && searchInfo && priceInfo && askingPriceInfo && timePriceDataList
    return (
        <div className={""}>
            <LoadingOrError loading={isLoading} error={isError} />

            <div className={"pt-20 p-4"}>
                {isValid &&(
                    <>
                        <StockSpecTopNavBar excd={searchInfo.ovrs_excg_cd} symb={stockId}/>
                        <StockInfo
                            name={searchInfo.prdt_name}
                            priceInfo={priceInfo}
                            type={searchInfo.ovrs_excg_name}
                        />
                        <div className={"flex p-4 justify-between "}>
                            <div onClick={() => handleOptionSelect('chart')}>차트</div>
                            <div onClick={() => handleOptionSelect('askingPrice')}>호가</div>
                            <div onClick={() => handleOptionSelect('detailInfo')}>종목 정보</div>
                        </div>
                        <div className={"p-4"}>
                            {option === 'chart' && <StockChart  data={timePriceDataList} curr={priceInfo.curr}/>}
                            {option === 'askingPrice' && <AskingPrice askingPriceInfo={askingPriceInfo} curr={priceInfo.curr}/>}
                            {option === 'detailInfo' && <StockDetailInfo priceInfo={priceInfo}/>}
                        </div>
                        <StockSpecBottomNavBar
                            handleOrderSelect={handleOrderSelect}
                            exchangeCode={searchInfo.ovrs_excg_cd}
                            price={priceInfo.last}
                            stockName={searchInfo.prdt_name}
                            curr={priceInfo.curr}
                        />
                    </>
                )}
            </div>
        </div>

    )
}

export default StockSpecPage