import React, {useState} from 'react'
import OrderTopNavBar from "./components/OrderTopNavBar";
import {useLocation} from "react-router-dom";
import OrderPrice from "./components/OrderPrice";
import OrderQuantity from "./components/OrderQuantity";
import {formatNumber} from "../../utils/formatNumber";

const OrderPage: React.FC = () => {
    const {orderType, stockId, price} = useLocation().state
    const [curPrice, setCurPrice] = useState(price);

    return (
        <div>
            <OrderTopNavBar/>
            <div className={"pt-20 p-4"}>
                <div className={"pb-4 text-2xl"}>
                    {stockId}
                </div>

                <div className={"bg-gray-100 rounded-2xl p-2"}>
                    <div className={"text-base"}>{orderType}할 가격</div>
                    <OrderPrice price={curPrice} setCurPrice={setCurPrice}/>
                </div>

                <div className={"mt-1 bg-gray-100 rounded-2xl p-2"}>
                    <div className={"font-semibold"}>수량</div>

                    <OrderQuantity orderType={orderType} price={curPrice}/>

                    <div className={"text-gray-400 text-xs"}>
                        {orderType}가능 최대 {}주
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default OrderPage