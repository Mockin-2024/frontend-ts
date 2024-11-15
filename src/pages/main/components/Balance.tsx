import React from 'react'
import StockItem from "../../../components/item/StockItem";
import {IoIosArrowForward} from "react-icons/io";

const Balance = () =>{
    return(
        <div className={"pt-20 p-4"}>
            <div className={""}>
                내 투자
            </div>

            <div className={"flex flex-row text-3xl items-center"}>
                {}원
                <IoIosArrowForward/>
            </div>

            <div>
                분류 기준
            </div>

            <div className={""}>
                <StockItem stockName={"나스닥"} stockHolding={"3"} price={"100000"} returnRate={"0.5"}/>
            </div>
        </div>
    )
}

export default Balance