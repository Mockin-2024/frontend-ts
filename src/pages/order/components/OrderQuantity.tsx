import React, { useState } from 'react';
import {formatNumber} from "../../../utils/formatNumber";
import {formatCurrency} from "../../../utils/formatCurrency";
import useQuantity from "../hooks/useQuantity";

interface Props {
    orderType: string;
    price: number;
}

const OrderQuantity: React.FC<Props> = ({ orderType, price }) => {
    const {quantity, handleChange} = useQuantity()

    return (
        <div className={"flex flex-row items-center space-x-2"}>
            <input
                className={"bg-gray-100 rounded-2xl outline-none caret-indigo-600 text-2xl flex-grow mr-2 w-1.5 appearance-none"}
                type={"text"}
                placeholder={`몇 주 ${orderType}할까요?`}
                value={quantity > 0 ? formatNumber(quantity) : ''}
                onChange={handleChange}
            />
            <div className={"flex font-semibold"}>
                {formatCurrency(Number(price) * quantity)}원
            </div>
        </div>
    );
}

export default OrderQuantity;
