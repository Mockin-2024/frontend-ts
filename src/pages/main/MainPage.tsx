import React from "react";

import Balance from "./components/Balance";

import { IoIosArrowForward } from "react-icons/io";
import MainTopNavBar from "./components/MainTopNavBar";

const MainPage: React.FC = () => {
    return (
        <div>
            <MainTopNavBar />
            <Balance/>
            <div className={"flex items-center text-xl p-4"}>
                주문내역
                <IoIosArrowForward/>
            </div>
        </div>
    )
}

export default MainPage;