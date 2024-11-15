import React, {useState} from 'react'
import {useLocation} from "react-router-dom";
import StockSpecTopNavBar from "./components/StockSpecTopNavBar";
import StockInfo from "./components/StockInfo";
import AskingPrice from "./components/AskingPrice";
import StockDetailInfo from "./components/StockDetailInfo";
import StockSpecBottomNavBar from "./components/StockSpecBottomNavBar";
import useNavigator from "../../hooks/useNavigator";
import {AppRoutes} from "../../enums/AppRoutes";

const StockSpecPage: React.FC = () => {
    const {stockType, stockId} = useLocation().state || {};
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const {navigateTo} = useNavigator()

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const handleOrderSelect = (orderType: string) => {
        navigateTo(AppRoutes.ORDER, {
            orderType: orderType,
            stockId: stockId,
            price: "100000"
        })
    }

    return (
        <div className={""}>
            <StockSpecTopNavBar/>

            <div className={"pt-20 p-4"}>
                <StockInfo name={"나스닥"} price={"100000"} type={"NDAQ"}/>
                <div className={"flex p-4 justify-between "}>
                    <div onClick={() => handleOptionSelect('chart')}>차트</div>
                    <div onClick={() => handleOptionSelect('askingPrice')}>호가</div>
                    <div onClick={() => handleOptionSelect('detailInfo')}>종목 정보</div>
                </div>

                <div className={"p-4"}>
                    {/*{selectedOption === 'chart' && </>}*/}
                    {selectedOption === 'askingPrice' && <AskingPrice stockId={stockId} stockType={stockType} />}
                    {selectedOption === 'detailInfo' && <StockDetailInfo/>}
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