import React from 'react'

import useNavigator from "../../../hooks/useNavigator";
import useRestAPI from "../../../hooks/useRestAPI";

import {AppRoutes} from "../../../enums/AppRoutes";
import {Endpoint} from "../../../enums/Endpoint";
import {Http} from "../../../enums/Http";
import {ExchangeCode} from "../../../enums/ExchangeCode";
import {CurrencyCode} from "../../../enums/CurrencyCode";

import {IoIosArrowForward} from "react-icons/io";

const Balance = () =>{
    const {navigateTo} = useNavigator()
    const {loading} = useRestAPI(Endpoint.GET_BALANCE, Http.GET, {
        overseasExchangeCode: ExchangeCode.NASDAQ,
        transactionCurrencyCode: CurrencyCode.USD,
        continuousSearchCondition200: "",
        continuousSearchKey200: ""
    } )

    const handleStockSpec = (id: string, type: string) => {
        navigateTo(AppRoutes.STOCK, {
            stockId: id,
            stockType: type
        });
    }
    
    const handleMyAsset = () => {
        navigateTo(AppRoutes.MY_ASSET, {})
    }
    if(loading) {
        return (
            <div>
                <div className={""}>
                    내 투자
                </div>

                <div className={"flex flex-row text-3xl items-center"} onClick={handleMyAsset}>
                    {}원
                    <IoIosArrowForward/>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className={""}>
                내 투자
            </div>

            <div className={"flex flex-row text-3xl items-center"} onClick={handleMyAsset}>
                {}원
                <IoIosArrowForward/>
            </div>

            <div className={"pt-4"}>
                내 주식
            </div>

            <div key={1} className={"type"} onClick={() => handleStockSpec("1", "505")}>
                {/*<StockItem stockName={"나스닥"} stockHolding={"3"} price={"100000"} returnRate={"0.5"}/>*/}
            </div>
        </div>
    )
}

export default Balance