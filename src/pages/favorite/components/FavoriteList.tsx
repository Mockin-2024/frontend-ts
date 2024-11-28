import React from "react";

import {useFavorite} from "../../../context/FavoriteContext";
import useNavigator from "../../../hooks/useNavigator";
import {getStockType} from "../../../utils/getStockType";

import {ExchangeCode} from "../../../enums/ExchangeCode";
import {AppRoutes} from "../../../enums/AppRoutes";

import {Favorite} from "../types/Favorite";

const FavoriteList: React.FC = () => {
    const {favoriteList} = useFavorite();
    const {navigateTo} = useNavigator();

    const handleClick = (excd: ExchangeCode, symb: string) => {
        navigateTo(AppRoutes.STOCK, {
            stockId: symb,
            stockType: getStockType(excd)
        })
    }

    return (
        <div>
            {favoriteList.map((item:Favorite) => (
                <div key={item.symb} className={"flex items-center justify-between py-4"}
                onClick={() => handleClick(item.excd, item.symb)}>
                    <div>
                        {item.symb}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default FavoriteList;