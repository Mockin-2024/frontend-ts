import React from "react";
import {toExchangeCode} from "../../../utils/toExchangeCode";
import {ExchangeCode} from "../../../enums/ExchangeCode";

type HandleOrderSelectType = (stockName:string, orderType: string, exchangeCode:ExchangeCode, price:string) => void;

interface Props{
    handleOrderSelect: HandleOrderSelectType;
    exchangeCode: string;
    price: string;
    stockName: string;
}

const StockSpecBottomNavBar: React.FC<Props> = ({stockName, handleOrderSelect, exchangeCode, price}) => {
    return (
        <div className={"fixed bottom-0 left-0 right-0 flex justify-between p-4"}>
            <div className={"rounded-2xl bg-blue-600 text-white px-10 py-4 w-full text-center mx-2"}
                 onClick={(e) => handleOrderSelect(stockName, "판매", toExchangeCode(exchangeCode), price)}>
                판매하기
            </div>
            <div className={"rounded-2xl bg-red-500 text-white px-10 py-4 w-full text-center mx-2"}
                 onClick={(e) => handleOrderSelect(stockName, "구매", toExchangeCode(exchangeCode), price)}>
                구매하기
            </div>
        </div>
    )
}

export default StockSpecBottomNavBar;