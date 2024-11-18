import React from 'react'
import MyAssetTopNavBar from "./components/MyAssetTopNavBar";
import MyAsset from "./components/MyAsset";
import StockItem from "../../components/item/StockItem";
import {ExchangeCode} from "../../enums/ExchangeCode";

const MyAssetPage = () => {
    return (
        <div className={""}>
            <MyAssetTopNavBar/>
            <div className={"flex pt-16"}>
                <MyAsset/>
            </div>
            <div className={"flex bg-gray-100 mt-4 p-4"}>

            </div>
        </div>
    )
}

export default MyAssetPage