import React from 'react'
import MyAssetTopNavBar from "./components/MyAssetTopNavBar";
import MyAsset from "./components/MyAsset";
import StockItem from "../../components/item/StockItem";

const MyAssetPage = () => {
    return (
        <div className={""}>
            <MyAssetTopNavBar/>
            <div className={"flex pt-16"}>
                <MyAsset/>
            </div>
            <div className={"flex bg-gray-100 mt-4 p-4"}>
                <StockItem stockName={"테슬라"} stockHolding={"10"} price={"10000"} returnRate={"10"}/>
            </div>
        </div>
    )
}

export default MyAssetPage