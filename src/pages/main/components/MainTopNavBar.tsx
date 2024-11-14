import React from "react";

import TopNavBar from "../../../components/common/TopNavBar";

import {RxHamburgerMenu} from "react-icons/rx";
import { IoSearch } from "react-icons/io5";


const MainTopNavBar = () => {
    return (
        <TopNavBar
            Left={null}
            RightFirst={null}
            RightSecond={IoSearch}
            RightThird={RxHamburgerMenu}
        />
    )
}

export default MainTopNavBar;