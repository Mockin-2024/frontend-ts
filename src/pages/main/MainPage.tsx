import React from "react";

import Balance from "./components/Balance";

import { IoIosArrowForward } from "react-icons/io";
import MainTopNavBar from "./components/MainTopNavBar";
import News from "./components/News";

const MainPage: React.FC = () => {
    return (
        <div>
            <MainTopNavBar />
            <div className={"pt-20 p-4"}>
                <Balance/>
                <div className={"pt-4 flex items-center text-xl"}>
                    주문내역
                    <IoIosArrowForward/>
                </div>
                <div className={"pt-4"}>
                    <News/>
                </div>

            </div>
        </div>
    )
}

export default MainPage;