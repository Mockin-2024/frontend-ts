import React from "react";

import useNavigator from "../../../hooks/useNavigator";

import {AppRoutes} from "../../../enums/AppRoutes";

import {IoIosArrowForward} from "react-icons/io";

const History = () => {
    const {navigateTo} = useNavigator()

    const handleHistory = () =>{
        navigateTo(AppRoutes.HISTORY, {})
    }
    return (
        <div className={"pt-4 flex items-center text-xl"} onClick={handleHistory}>
            주문내역
            <IoIosArrowForward/>
        </div>)
}

export default History