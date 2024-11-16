import React from "react";

import TopNavBar from "../../../components/common/TopNavBar";

import {RxHamburgerMenu} from "react-icons/rx";
import Search from "../../../components/Icon/Search";


const MainTopNavBar = () => {
    return (
        <TopNavBar
            Left={null}
            RightFirst={null}
            RightSecond={Search}
            RightThird={RxHamburgerMenu}
        />
    )
}

export default MainTopNavBar;