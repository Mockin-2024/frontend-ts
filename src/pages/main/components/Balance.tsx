import React from 'react'
import StockItem from "../../../components/item/StockItem";
import {IoIosArrowForward} from "react-icons/io";
import useNavigator from "../../../hooks/useNavigator";
import {AppRoutes} from "../../../enums/AppRoutes";

const Balance = () =>{
    const {navigateTo} = useNavigator()

    const handleStockSpec = (id: string, type: string) => {
        navigateTo(AppRoutes.STOCK, {
            stockId: id,
            stockType: type
        });
    }
    return(
        <div>
            <div className={""}>
                내 투자
            </div>

            <div className={"flex flex-row text-3xl items-center"}>
                {}원
                <IoIosArrowForward/>
            </div>

            <div className={"pt-4"}>
                내 주식
            </div>

            <div key={1} className={"type"} onClick={() => handleStockSpec("1", "505")}>
                <StockItem stockName={"나스닥"} stockHolding={"3"} price={"100000"} returnRate={"0.5"}/>
            </div>
        </div>
    )
}

export default Balance