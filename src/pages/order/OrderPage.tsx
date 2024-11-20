import React, {useState} from 'react'

import {useLocation} from "react-router-dom";
import useQuantity from "./hooks/useQuantity";

import OrderTopNavBar from "./components/OrderTopNavBar";
import OrderPrice from "./components/OrderPrice";
import OrderQuantity from "./components/OrderQuantity";
import OrderButton from "./components/OrderButton";
import useOrder from "./hooks/useOrder";
import {useCurrency} from "../../context/CurrencyContext";
import usePsAmount from "./hooks/usePsAmount";
import LoadingOrError from "../../components/common/LoadingOrError";
import {OrderType} from "../../enums/OrderType";
import OrderInfo from "./components/OrderInfo";
import useModal from "../../hooks/useModal";
import {formatNumber} from "../../utils/formatNumber";


const OrderPage: React.FC = () => {
    const {orderType, stockId, price, exchangeCode, stockName, curr} = useLocation().state

    const {quantity, handleChange} = useQuantity()
    const {orderHandler} = useOrder(exchangeCode, stockId)
    const {convertToKRW} = useCurrency()
    const {isOpen, openModal, closeModal} = useModal()
    const [curPrice, setCurPrice] = useState(convertToKRW(Number(price), curr));

    const {psamount, loading: loadingPsamount, error: errorPsamount} = usePsAmount(exchangeCode, stockId, price)

    const isLoading = loadingPsamount;
    const isError = errorPsamount;

    return (
        <div>
            <LoadingOrError loading={isLoading} error={isError} />
            <OrderTopNavBar/>
            {!isLoading && !isError && psamount && (
                <>
                    <div className={"pt-20 p-4"}>
                        <div className={"flex flex-row pb-4"}>
                            <div className={"text-2xl"}>{stockName}</div>
                            <div className={"text-xs"}>{exchangeCode}</div>
                        </div>

                        <div className={"bg-gray-100 rounded-2xl p-2"}>
                            <div className={"text-base"}>{orderType}할 가격</div>
                            <OrderPrice price={curPrice} setCurPrice={setCurPrice}/>
                        </div>

                        <div className={"mt-1 bg-gray-100 rounded-2xl p-2"}>
                            <div className={"font-semibold"}>수량</div>

                            <OrderQuantity
                                orderType={orderType}
                                price={curPrice}
                                handleChange={handleChange}
                                quantity={quantity}
                            />
                            <div className={"text-gray-400 text-xs"}>
                                {orderType === OrderType.BUY ? `${orderType}가능 ${formatNumber(Number(psamount.ord_psbl_qty))}주`
                                : `${orderType}가능 ${0}주`}
                            </div>
                        </div>
                    </div>
                    <OrderButton
                        orderType={orderType}
                        openModal={openModal}
                    />
                </>)}

            {isOpen && (
                <OrderInfo
                    stockName={stockName}
                    orderType={orderType}
                    orderHandler={orderHandler}
                    quantity={quantity}
                    price={curPrice}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default OrderPage