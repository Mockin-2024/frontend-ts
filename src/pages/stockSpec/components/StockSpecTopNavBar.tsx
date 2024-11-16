import React from "react";

import TopNavBar from "../../../components/common/TopNavBar";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import BackSpace from "../../../components/Icon/BackSpace";

const StockSpecTopNavBar = () => {
    return (
        <TopNavBar
            Left={BackSpace}
            RightFirst={null}
            RightSecond={null}
            RightThird={HiOutlineDotsHorizontal}
        />
    )
}

export default StockSpecTopNavBar;