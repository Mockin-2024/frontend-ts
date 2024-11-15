import React from "react";

import TopNavBar from "../../../components/common/TopNavBar";

import { FiArrowLeft } from "react-icons/fi";

const OrderTopNavBar = () => {
    return (
        <TopNavBar
            Left={FiArrowLeft}
            RightFirst={null}
            RightSecond={null}
            RightThird={null}
        />
    )
}

export default OrderTopNavBar