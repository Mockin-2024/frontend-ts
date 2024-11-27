import React from "react";
import {useFavorite} from "../../../context/FavoriteContext";

import BackSpace from "../../../components/Icon/BackSpace";
import Heart from "../../../components/Icon/Heart";

import {Favorite} from "../../favorite/types/Favorite";
import useFavoriteExist from "../hooks/useFavoriteExist";

const StockSpecTopNavBar: React.FC<Favorite> = ({excd, symb}) => {
    const {favoriteList} = useFavorite()
    const {isExist, handleToggleFavorite} = useFavoriteExist(favoriteList.some(item => item.excd === excd && item.symb === symb), excd, symb)

    return (
        <div
            className={"fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-4 border-none text-3xl text-white bg-indigo-600"}>
            <BackSpace/>
            <div className="flex space-x-4">
                <Heart exists={isExist} handleToggleFavorite={handleToggleFavorite}/>
            </div>
        </div>
    )
}

export default StockSpecTopNavBar;