import React from "react";

import TopNavBar from "../../../components/common/TopNavBar";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiArrowLeft } from "react-icons/fi";

const StockSpecTopNavBar = () => {
    return (
        <TopNavBar
            Left={FiArrowLeft}
            RightFirst={null}
            RightSecond={null}
            RightThird={HiOutlineDotsHorizontal}
        />
    )
}

export default StockSpecTopNavBar;