import React from "react";

import TopNavBar from "../../../components/common/TopNavBar";

import BackSpace from "../../../components/Icon/BackSpace";

const OrderTopNavBar = () => {
    return (
        <TopNavBar
            Left={BackSpace}
            RightFirst={null}
            RightSecond={null}
            RightThird={null}
        />
    )
}

export default OrderTopNavBar