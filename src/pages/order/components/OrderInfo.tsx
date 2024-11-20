import React from "react";

import {OrderType} from "../../../enums/OrderType";
import {OrderHandler} from "../hooks/useOrder";
import {formatNumber} from "../../../utils/formatNumber";

interface Props {
    stockName: string;
    orderType: OrderType;
    orderHandler: OrderHandler,
    quantity: number;
    price: number;
    closeModal: () => void;

}

const OrderInfo: React.FC<Props> = ({stockName, orderType, orderHandler, quantity, price, closeModal}) => {
    const color = orderType === OrderType.BUY ? "text-red-500" : "text-blue-600"
    const colorBG = orderType === OrderType.BUY ? "bg-red-500" : "bg-blue-600"

    return(
        <div className={"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center"}
        onClick={closeModal}>
            <div className="bg-white rounded-t-lg shadow-lg p-6 w-full sm:w-11/12 max-w-lg" style={{height: '50%'}}
                 onClick={(e) => e.stopPropagation()}>
                <div className={"flex justify-center text-xl"}>
                    {stockName}
                </div>
                <div className={"flex flex-row justify-center text-2xl"}>
                    <div>{formatNumber(quantity)}주</div>
                    <div className={`px-2 ${color}`}>
                        {orderType}
                    </div>
                    <div>요청</div>
                </div>
                <div className={"flex flex-row justify-between py-4"}>
                    <div>1주 가격</div>
                    <div>{formatNumber(price)}원</div>
                </div>
                <div className={"flex flex-row justify-between pb-4"}>
                    <div>예상 수수료</div>
                    <div>{formatNumber(Math.floor(price * quantity * 0.001))}원</div>
                </div>
                <div className={"flex flex-row justify-between"}>
                    <div>총 주문 금액</div>
                    <div>{formatNumber(price * quantity)}원</div>
                </div>
                <div className={"flex flex-row justify-between pt-12 text-xl"}>
                    <div className={"rounded-2xl bg-gray-400 text-white px-12 py-4 w-full text-center mx-2"}
                         onClick={closeModal}>
                        닫기
                    </div>
                    <div className={`rounded-2xl ${colorBG} text-white px-12 py-4 w-full text-center mx-2`}
                         onClick={() => orderHandler(orderType, quantity.toString(), price.toString())}>
                        {orderType}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInfo;