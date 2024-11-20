import React from "react";
import {toExchangeCode} from "../../../utils/toExchangeCode";
import {ExchangeCode} from "../../../enums/ExchangeCode";
import {OrderType} from "../../../enums/OrderType";

type HandleOrderSelectType = (stockName:string, orderType: OrderType, exchangeCode:ExchangeCode, price:string, curr:string) => void;

interface Props{
    handleOrderSelect: HandleOrderSelectType;
    exchangeCode: string;
    price: string;
    stockName: string;
    curr: string;
}

const StockSpecBottomNavBar: React.FC<Props> = ({stockName, handleOrderSelect, exchangeCode, price, curr}) => {
    return (
        <div className={"fixed bottom-0 left-0 right-0 flex justify-between p-4"}>
            <div className={"rounded-2xl bg-blue-600 text-white px-10 py-4 w-full text-center mx-2"}
                 onClick={(e) => handleOrderSelect(stockName, OrderType.SELL, toExchangeCode(exchangeCode), price, curr)}>
                판매하기
            </div>
            <div className={"rounded-2xl bg-red-500 text-white px-10 py-4 w-full text-center mx-2"}
                 onClick={(e) => handleOrderSelect(stockName, OrderType.BUY, toExchangeCode(exchangeCode), price, curr)}>
                구매하기
            </div>
        </div>
    )
}

export default StockSpecBottomNavBar;