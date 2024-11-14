import React from "react";

import TopNavBar from "../../components/common/TopNavBar";
import Balance from "./components/Balance";

import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxDotsHorizontal } from "react-icons/rx";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

const MainPage: React.FC = () => {
    return (
        <div>
            <TopNavBar
                types={{
                    Left: FaArrowLeft,
                    RightFirst: IoHeartSharp,
                    RightSecond: IoHeartOutline,
                    RightThird: RxHamburgerMenu
                }}
                components={{
                    Left: {},
                    RightFirst: {},
                    RightSecond: {},
                    RightThird: {}
                }}
            />

            <Balance/>

            <div className={"flex items-center text-xl p-4"}>
                주문내역
                <IoIosArrowForward/>
            </div>

        </div>
    )
}

export default MainPage;