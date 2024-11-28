import React from "react";

import useNavigator from "../../../hooks/useNavigator";

import {AppRoutes} from "../../../enums/AppRoutes";
import {IoIosArrowForward} from "react-icons/io";

const Favorites = () => {
    const {navigateTo} = useNavigator();

    const handleFavorite = () => {
        navigateTo(AppRoutes.FAVORITE)
    }

    return (
        <div className={"flex items-center text-xl"}  onClick={handleFavorite}>
            즐겨찾기
            <IoIosArrowForward/>
        </div>
    )
}

export default Favorites;