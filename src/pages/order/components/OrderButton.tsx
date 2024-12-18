import React from "react";
import {OrderType} from "../../../enums/OrderType";

interface Props {
    orderType: OrderType;
    openModal: () => void;
}

const OrderButton: React.FC<Props> = ({orderType, openModal}) => {
    return (
        <div className={"fixed bottom-0 left-0 right-0 flex p-4"}>
            <div className={`rounded-2xl text-white px-10 py-4 w-full text-center mx-2 ${orderType === "판매" ? "bg-blue-600" : "bg-red-500"}`}
            onClick={openModal}>
                {orderType}하기
            </div>
        </div>
    )
}

export default OrderButton;